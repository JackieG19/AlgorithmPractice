using System;

/* High and low
- Play the game high low. 
- Draw card face up. 
- Allow user to guess if the next card will be higher or lower. 
- Count how many correct in a row the player gets. 
- Old card is shuffled back into the deck for start of next turn.

v1.0 can pull a card between 1 = A and 13 = K
v1.1 can pull a second card and compare against the first
v1.2 using a ststic guess value confirm logic for the 3 scenarios
v1.3 it player does not lose increase score and replace active card with drawn card
v1.4 create an interface that allows the user to guess high or low
v1.5 when player loses display score and end game
v1.6 update cards to include suit
v1.7 ensure that the game will not draw the active card
*/

public class Program
{
	public static void Main()
	{
		//int[] cards = new int[13] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
		int[] low = new int[6] {2, 3, 4, 5, 6, 7};
		int[] high = new int[6] {8, 9, 10, 11, 12, 13};
		int[] ace = new int[1] {1};
		
		for(int i = 0; i < low.Length; i++)
		{
			//Console.WriteLine("Value of i: {0}", i);
			for(int j = 0; j < high.Length; j++)
			{
				//Console.WriteLine("Value of j: {0}", j);
				if(low[i] < high[j])
				{
					Console.WriteLine("low number: " + low[i]);
				}
			}
		}
	}
}
