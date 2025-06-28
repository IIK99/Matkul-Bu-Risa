#include <iostream>

using namespace std;

int prosess (int a, int b) {
    return (a+b);
} 

float prosess (float a, float b) {
    return (a-b);
}

int main() {
    cout << "Hasil : " << prosess(4,5);
    return 0;
}

// ketika saya balik float di atas dan int di bawah hasilnya tetap sama 9
// ku kira dari main function ternyata bukan juga, ketika main function diubah ke float jadi error 