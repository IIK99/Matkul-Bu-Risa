// looping with do-while loop
// do-while loop adalah looping yang mengulangi program sekali setelah kondisi terpenuhi
// jadi dilakukan dulu satu kali, baru kemudian mengecek kondisi

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

        if (ulang != 'y' && ulang != 'Y' && ulang != 't' && ulang != 'T') {
    cout << "Input tidak dikenal. Program berhenti.\n";
    break;
}

    } while (ulang == 'y' || ulang == 'Y'); // loop condition to repeat the program

    cout << "\nProgram selesai. Terima kasih!\n";
    return 0;
}