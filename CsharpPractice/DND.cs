using System;

/* DRD attacking system
usig the rules of DRD making an attack determine if a player/enemy
lands a hit (including critical hits and misses) then determine the damage done

To determine a hit - roll a 20 sided dice include any modifiers
- if 20 is rolled: considered critical hit and always hits
- if a 1 is rolled considered a critical miss
- otherwise dice result and modifier must be above attack
on a hit: roll the provided damage dice into and return the damage
- Note: on a critical hit the damage is rolled twice

Inputs:
modifier = -100< x <100 if using a dice total = 100
attack = 0< x 50 - using another dice
damage dice = string ex "1d4" (1 - 4 sided dice), "2d8" (2 - 8 sided dice), "3d100" (3 - 100 sided dice)

Outputs:
"Hit x damage"
"miss 0 damage"
"critical hit x + y = z damage"
"critical miss"

Additional challenge output:
"Critical miss player may try to void x damage"
damage roll 12 round up

v1.0 roll a number between 1 and 20
v1.1 include the modifier and compare against dice to determine hit
v1.2 detect critical hit or miss and skip modifier attack check
v1.3 parse the damage roll into its dice amounts and sides
v1.4 determine damage delt
v1.5 include crtical hit roll for additional damage
v1.6 confirm text outputs and return damage amount 
*/

public class Dice // container(main function)
{
	public int sides; // how many sides of a dice
	public int value; // how many dices
	public Random rand; // randomizer
	
	public Dice(int sides) // creating an (real life) obj
	{
		this.sides = 20; // dice has 20 sides
		this.value = 1; // using 1 dice

	}
	
	//public void Roll(Random rand) // roll action
	public int Roll(Random rand) // (value to use) 
	{
		//this.value = rand.Next(1, this.sides + 1)
		return rand.Next(1, this.sides + 1); // random num range (1, 20) 
	}
}

public class HitOrMiss
{
	public bool Compare(int x, int y)
	{
		if(x + y >= 20)
		{
			return true;
		}
		return false;
	}
}

public class Program
{	
	public static void Main()
	{
		var newDice = new Dice(20);
		var rand = new Random();
		var compare = new HitOrMiss();
		
		var hitDice = newDice.Roll(rand);
		var modifier = newDice.Roll(rand);
		
		Console.WriteLine("hit: " + hitDice);
		Console.WriteLine("modify: " + modifier);
		Console.WriteLine(hitDice + modifier);
		Console.WriteLine(compare.Compare(hitDice, modifier));
	}
}
