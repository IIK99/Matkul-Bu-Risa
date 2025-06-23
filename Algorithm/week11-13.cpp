// looping
#include <iostream>
using namespace std;

int main()
{
    char ulang; // declaration of variable to repeat the program
    cout << "Program Kategori Umur\n";

    do {
        int umur;
        cout << "Masukkan umur: ";
        cin >> umur;

        if (umur < 12)
        {
            cout << "Umur anak" << endl;
        }
        else if (umur <= 17)
        {
            cout << "Umur remaja" << endl;
        }
        else
        {
            cout << "Umur bukan anak atau remaja" << endl;
        }

        cout << "\nApakah ingin mengulangi program? (y/t): ";
        cin >> ulang;

    } while (ulang == 'y' || ulang == 'Y'); // loop condition to repeat the program

    cout << "\nProgram selesai. Terima kasih!\n";
    return 0;
}
// This program will keep asking for the user's age and categorize it until the user decides to stop.
// The loop continues as long as the user inputs 'y' or 'Y' to repeat the program.
// If the user inputs 't' or any other character, the program will terminate with a thank you message.
// This is a simple demonstration of using loops and conditional statements in C++.