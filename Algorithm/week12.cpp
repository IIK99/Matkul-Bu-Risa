// looping with for loop
#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "Masukkan jumlah bilangan: ";
    cin >> n;

    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }

    cout << "Jumlah dari 1 sampai " << n << " adalah: " << sum << endl;

    return 0;
}