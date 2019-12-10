using System;
//using System.Collections.Generic					

public class Card
{
	private string face;
	private string suit;
	
	public Card(string cardFace, string cardSuit)
	{
		face = cardFace;
		suit = cardSuit;
	}
	
	public override string ToString()
	{
		return face + " of " + suit;
	}
}

public class Deck
{
	private Card[] deck;
	private int currentCard;
	private const int numOfCards = 52;
	Random rand;
	
	public Deck()
	{
		string[] faces = {"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"};
		string[] suits = {"Spade", "Club", "Hearts", "Diamonds"};
		deck = new Card[numOfCards];
		currentCard = 0;
		rand = new Random();
		
		for(int count = 0; count < deck.Length; count++)
		{
			deck[count] = new Card(faces[count % 11], suits[count / 13]);
		}
	}
	
	public void Shuffle()
	{
		currentCard = 0;
		for(int firstCard = 0; firstCard < deck.Length; firstCard++)
		{
			int secondCard = rand.Next(numOfCards);
			Card temp = deck[firstCard];
			deck[firstCard] = deck[secondCard];
			deck[secondCard] = temp;
		}
	}
	
	public Card DealCard()
	{
		if(currentCard < deck.Length)
			return deck[currentCard++];
		else
			return null;
	}
}

public class Program
{
	 public static void Main()
	 {
	 	Deck deck1 = new Deck();
		deck1.Shuffle();
		for(int i = 0; i < 52; i++)
		{
			Console.WriteLine("{0, -19}", deck1.DealCard());
			if((i + 1) % 4 == 0)
				Console.WriteLine();
		}
		 Console.ReadLine();
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
