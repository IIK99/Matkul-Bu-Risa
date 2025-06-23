// if statement
#include <iostream>

using namespace std;
int main()
{
    int a, b;
    cout << "Masukkan nilai A: ";
    cin >> a;
    cout << "Masukkan nilai B: ";
    cin >> b;
    if (a > b)
    {
        cout << "A lebih besar dari B" << endl;
    }
    else if (a < b)
    {
        cout << "A lebih kecil dari B" << endl;
    }
    else
    {
        cout << "A sama dengan B" << endl;
    }
    return 0;
}