// output array 2D
// 22 56 68 99
// 32 47 87 20

#include <iostream>
using namespace std;

int main() {
    // 2 rows, 4 columns
    int data[2][4] = {
        {22, 56, 68, 99},
        {32, 47, 87, 20}
    };

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 4; j++) {
            cout << data[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}