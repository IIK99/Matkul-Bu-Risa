// kondisi if, user input angka umur. masuk kategori anak jika umur < 12, remaja jika umur <= 17, selain itu bukan anak atau remaja
#include <iostream>
using namespace std;
int main()
{
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
    return 0;
}