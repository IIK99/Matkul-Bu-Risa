#include <iostream>
using namespace std;

void tukar(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
// ketika saya balikan a ke b, dan b ke a. Hasilnya tetap sama.
}

int main() {
    int x, y;

    cout << "Masukkan bilangan pertama: ";
    cin >> x;
    cout << "Masukkan bilangan kedua: ";
    cin >> y;

    cout << "Sebelum ditukar: x = " << x << ", y = " << y << endl;

    tukar(&x, &y);

    cout << "Setelah ditukar: x = " << x << ", y = " << y << endl;

    return 0;
}
