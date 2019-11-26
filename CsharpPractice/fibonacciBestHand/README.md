# Fibonacci Best Hand

Allow for up to 5 rounds of play to occur players may exhange cards based on a set of rules.

The values of a hands now can earn bonuses as well.

Trade cards rules:
1. number of cards must follow fibonacci [1,2,3,5,8]
2. can not trade it the cards of the same value (no pairs)
3. if trading more than 2 cards 1 muat be a face card unless do not have one
4. if deck runs out, shuffle discard pile back into play

Scoring:
1. if any playeer have the same face card 1 turn each player is exchange
2. for each card with a match = 2+ points
3. for each card in a straight of at least 3 cards = 3+ ppints
4. for each card in the royal family beyond the first 5+ points

### Best Hand wins!
```
Example:  5, 6, 7, 7, 8, 8, 9, 9

2 points for pairs [7,7] [8,8,] [9,9] = 6 points total

2 straights (at least 3 or more cards, 3 points each) [5,6,7,8,9] | [7,8,9] = 6 points

5 + 6 + 7 + 7 + 8 + 8 + 9 + 9 = 59 total

Total Score = 71 (6+6+59)
```
___
***v1. Game prep***
- classes
- card deck hand
- player
- deal cards 8 to player

***v2. exchange a card***
 - exchange more than 1 card
- enforce fibonacci
- validate trade
- reject pair
- reject face and rule breaking
- confirm face card
- implement reshuffle (deck class)

***(vx. where to implement discard pile)***

***v3. Detect it round 5 round passed***
- total hand
- find pairs
- how many pairs
- bonus points for pair
- award royal family bonus point
- detect straight
- detect more than one straight
- remove royal family
___
**Game Play Prep**
1. exchange 1 card
2. exchange more than 1 card
3. reshuffle
4. detect 5 rounds
5. total hand
6. enforce fibonacci
7. matching card
8. royal family cards
9. enforce no match for trade
