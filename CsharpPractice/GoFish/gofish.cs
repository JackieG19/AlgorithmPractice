using System;

public class Cards
{
	public enum FaceValue { Ace = 1, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King };
	public enum SuitValue { Diamonds, Clubs, Hearts, Spades };
}

public class Card
{	
	public Cards Face { get; private set; }
    public Cards Suit { get; private set; }

    public Card(Cards suit, Cards face)
    {
    	this.Face = face;
        this.Suit = suit;
     }

	public override string ToString()
    {
       	return Face + " of " + Suit;
    }

}

public class Deck
{
	private Card[] deck;
    private Random random = new Random();

    public Deck()
    {
   		var suits = Enum.GetNames(typeof(Cards)).Length;
        var faces = Enum.GetNames(typeof(Cards)).Length;
		Console.WriteLine(suits);
        int deckSize = suits * faces;
        deck = new Card[deckSize];
	}
}
	
public class Program
{
	public static void Main()
	{
		Console.WriteLine("Hello World");
		//var newCards = new Card();
	}
}
