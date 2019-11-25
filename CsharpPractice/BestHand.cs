using System;

public class Cards
{
	//public int cards = 52;
	//public int value = 1; 
	public Random rand;
	
	int[] spades = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
	int[] hearts = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
	int[] clubs = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
	int[] diamonds = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
	
	public int RandSpades(Random rand)
	{
		return rand.Next(spades.Length);  
	}

	public int RandHearts(Random rand)
	{ 
		return rand.Next(hearts.Length);  
	}
	
	public int RandClubs(Random rand)
	{ 
		return rand.Next(clubs.Length);  
	}
	
	public int RandDiamonds(Random rand)
	{ 
		return rand.Next(diamonds.Length);  
	}
}

public class Program
{
	 public static void Main()
	 {
		 var card = new Cards();
		 var rand = new Random();
     
		 var cardOfSp = card.RandSpades(rand);
		 var cardOfHrt = card.RandHearts(rand);
		 var cardOfClb = card.RandClubs(rand);
		 var cardOfDimod = card.RandClubs(rand);
     
		 Console.WriteLine(cardOfSp + " Of Spades");
		 Console.WriteLine(cardOfHrt + " Of Hearts");
		 Console.WriteLine(cardOfClb + " Of Clubs");
		 Console.WriteLine(cardOfDimod + " Of Diamonds");	 
	 }
}

/*
Create a card game where each player(2-4) draws 8 cards from a standard
52 cards deck face cards are K,Q,J = 10, Ace = 11, digit cards = their value 
the hand with the higest value wins

v1.0 create a hand of 8 unique cards including suits
v1.1 calclate the value of a hand 
v1.2 add in the option for 2 to 4 players
v1.3 determine the winner or declare a tie
*/
