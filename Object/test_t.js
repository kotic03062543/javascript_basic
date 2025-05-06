// 
double a = 0.1 + 0.2;
double b = 0.3;

Console.WriteLine(a);  // Output: 0.30000000000000004

Console.WriteLine(a == b);  // Output: False
Console.WriteLine(Math.Abs(a - b) < 0.001);  // Output: True
