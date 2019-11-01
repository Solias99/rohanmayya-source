---
path: "/intuitive-dynamic-programming"
date: "11-01-2019"
title: "An intuitive approach to Dynamic Programming"
tags: ['tech','coding']
excerpt: "DP getting on your nerves? Let's break it down!"
---

Hey, we’ve all struggled with dynamic programming (and probably still are). I’m here to drop my two cents, and demystify it for you a little. I also see this as an opportunity for me to reinforce my concepts.

The thing about DP is, I’ve noticed most YouTubers or people just memorize the approach (using 2 table/1 list/set etc) and apply it to a given problem. Here I’m going to try and intuitively analyze the infamous coin change problem, and see how far we can break it down to get a better grasp of DP.

The most important thing about DP is optimal substructure and overlapping subproblems.

What?

To simplify it, if I take just one small part of the problem (say when my input size is 1) what is the expected output I am getting?

Can I somehow use this output in my future computations as an optimization (when my input becomes bigger)? Yes, and hopefully by solving the coin change problem together, we’re able to figure out how and why.

## The Coin Change problem

![Question](/image6.png)

First, let’s look at another example and solution for it:
`amount = 31`
`coins = [25, 10, 5, 1]`

You can come up with a simple greedy approach where you do the following in your function:
```
def computeCoins(amount, coins):
    total = 0
    for coin in coins:
        total += amount / coin
        amount %= coin	
        if amount == 0:
            break
    return total
```

And this will give you the output 3 for this example, which is what we’re expecting (one 25 coin, one 5 coin and one 1 coin)

Now the problem with this solution is: it’ll only work for this given list of coins.
Think about it this way, if you removed 5 from the list of coins, you’re left with [25,10,1]

If you re-run your algorithm, you’re left with the answer 7. (31 / 25 + 6 / 1)
But the correct answer to this is (`3` 10 coins and `1` 1 coin). i.e three 10 coins and one 1 coin. Total = 4.

At this point, since you know you cannot use greedy technique, the only other thing you can think of is some sort of brute force (unless you know DP). So you would take all combinations of the given coins and see which gives you the min value.

(At this point, even if you don’t know what Greedy is, that’s alright. What you would have done so far i.e the solution above is some variant of Greedy, but it’s mostly just intuition where you start dividing the amount with the largest coin)

Dynamic programming is what many people like to call “careful brute force”.
It’s similar to what I’ve mentioned above, i.e you take all combinations, but you sort of “remember” some previous computations so you don’t waste time recalculating them again.

Let’s come back to example 1:
<br/>
`amount = 11`
`coins = [1,2,5]`
<br/>
(Taking this example to show a smaller table, since 11 is a smaller number. You can try the same approach for the previous example afterwards).



Let’s draw a table for this because it’ll be super helpful visualizing what’s going on (You can use the same approach for your algorithm too, but you don’t necessarily have to use a 2D structure. a 1d array will work fine as well.)

Now the idea is: 
If I take the 1 coin (remember, I have infinite number of all of these coins as the problem has stated), and I use it to calculate for every single value of amount from 0 to 11 (0 is taken because the amount can drop to 0 after use of one or many coins), what will be my required number of coins?

When the amount is 1 and the coin I have is only 1:

![Table 1](/image5.png)

Now for increasing amounts (say I make my amount 2, but I still have the 1 coin available to me only), I keep filling up the table.

Eventually: for amount 11 with only access to the 1 coin:

![Table 2](/image3.png)

So far, so good. Easy to understand as well. But the following few steps is where DP really shines (and gets a little confusing).

Now let’s get to Row 1 (Where we include the possibility of having coin 1 AND 2).
In the first unfilled cell (row 1, column 1, 0 based indexing), we see that we have the 2 coin available, but the amount is 1. Therefore, we don’t need the 2 coin.
We take the value from the same column, 1 row above (or more informally, we just put 1 here because we’re using the 1 coin.)

Now let’s look at row 1, column 2. Here we have two options, and this is very important.
We either take the value from the same column, previous row because we have already computed the most optimum solution WITHOUT the 2 coin, OR
we try and introduce the 2 coin and see if the number of total coins at this point is lesser.


Formulaically, we take:
 table[i][j] = min(table[i-1][j], table[i][j-coins[i] + 1)

Here, table[i][j-coins[i] + 1 essentially means you’ve introduced the new coin, so you go back a few steps in the same row where the new amount is:
amount  = amount - coin value. 

(One thing to note here, coins[i] for 2nd row is 2, even though in the table I have shown “1,2” for convenience purposes, to indicate that both coins are available for this row).

So if the question was: amount = 2 and coins = [1,2] 
We’d have:

![Table 3](/image8.png)

And our solution would end here, because we know just one 2 coin is required. (and the answer is the last row, last column)

Now the magic of DP starts here:
We use these computed values to further compute everything else in the table. Understand that if we were doing it without DP, then every time you’re checking for min value, if you take the new coin, then again you have to compute the optimal value for the remaining amount after taking the new coin. This will become more apparent as we keep going through the table.

Let’s now compute the next unfilled cell together to reinforce what we have just learned.

![Table 4](/image7.png)

So, why 2? The formula will always give you the right answer, but intuitively, why 2?

We know that we can’t take the value from the previous row because using three 1 coins don’t make sense, as we now have access to a 2 coin.


So we now compute table[i][j-coins[i]] + 1
Here, table[i][j-coins[i]] is the answer when the amount is 1. What we are trying to say here is, when the amount is 3, and we introduce a new coin (in this case, the 2 coin), if I were NOT using DP, I would have to calculate the most optimum solution at position table[i][j-coins[i] as well, which is a kind of brute forcing. Since we know what is already most optimum for amount 1 with access to coins [1,2], (the answer for it being 1), we can infer that putting together the 2 coin and 1 coin now will give me two total coins in hand, which is lesser than having 3 total coins in hand.

Read the above paragraph a few times, because that is the intuition required to at the very least understand where to use DP.

Let’s keep going with our table until we introduce a new coin:

![Table 5](/image2.png)

I’ve filled up the table till we have to make use of a 5 coin, but I urge you to try doing so yourself before continuing. 

So now we have access to a 5 coin. The empty cell we’re at indicates that the amount is 5.
At this point, the most optimum solution without a 5 coin is three total coins in hand. (inferred from above row, same column).

When we introduce a 5 coin, the amount drops down to 0, and for 0 amount, the most optimum value on the last row is 0, therefore we compute 0 + 1 (according to our formula and logic) and we get 1. 

Intuitively, without all the formulas and glamorous tables, we can still infer by visualizing that:
one 5 coin > two 2 coins + one 1 coin

![Table 6](/image1.png)

We continue making use of this 5 coin until we reach 10. At this point again, intuitively, we know that two 5 coins in hand beats any other solution we’re aware of,so we’re going to put 2 at the second last empty cell.

![Table 7](/image4.png)

Now let’s compute the last cell together shall we? We know the drill by now.
At this point, we’re computing the cell for amount 11.

We already know the most optimum solution for CELL 6 with access to a 5 coin is 2. (one 5 coin + one 1 coin)

Therefore by intuitively adding one more 5 coin to this, we get a total of 3 coins (two 5 coins + one 1 coin)
And this easily beats the previous row’s value of 6. (Where we did not have access to any 5 coins)

Hence, we fill the last cell with 3. And that is our final answer.

## Conclusion 
I want to conclude by saying that DP is difficult to understand, and there are some patterns you have to get used to. The key is spaced repetition and getting to solve a variety of problems (such as this, 0-1 knapsack, maximum contiguous subarray etc)

Remember that it’s not always a 2d table that you have to use, nor do you have to always compute bottom-up. DP is used more often as memoization, i.e when you’re using recursion and want to store some previously computed values (Good example: Fibonacci series).

 Lastly, dynamic programming is most useful to solve problems where you have to do some sort of min-maxing, in case you are ever stuck wondering where to use DP.
