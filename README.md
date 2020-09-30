# HACKTIV8 BANK
Telah diberikan 2 model yaitu Customer dan Account:

- Customer
  - identityNumber (string)
  - fullName (string)
  - address (string)
  - birthDate (date)
  - gender (string)
  - otp (string)

- Account
  - type (string)
  - balance (float)
  - accountNumber (string)

# Release 0
Buatlah endpoint untuk customer yang ingin pertama kali ingin menjadi nasabah pada Hacktiv8 Bank sesuai dengan ketentuan sebagai berikut:
- route:
  - `POST /customers/register`
- request:
  - body
    - `{  
         identityNumber: '3212345678901212',
         fullName: 'Foxie Fox',
         address: 'Jl. Sultan Iskandar Muda No.7',
         birthDate: '12/12/1990',
         gender: 'male'
       }`
- response:
  - `201`: `{ OTP: '...' }`

Req:
- identityNumber harus diisi; minimum karakter 16 digit maksimum 20 digit; dan harus unik
  - Tampilkan pesan **Identity Number must be filled** jika `identityNumber` kosong
  - Tampilkan pesan **Identity Number minimum 16 characters and maximum 20 characters** jika `identityNumber` kurang dari 16 digit atau lebih dari 20 digit
  - Tampilkan pesan **Duplicate Identity Number** jika identityNumber duplicate (buat custom validation)
- OTP adalah angka random yang digenerate oleh system sebanyak 5 digit saat seorang customer register dan OTP ini disimpan pada column otp pada tabel Customer secara otomatis saat endpoint ini dihit. OTP harus unique, jika OTP duplicate maka system harus melakukan random kembali!!

# Release 1
Buatlah endpoint untuk melihat list customer:
- route:
  - `GET /customers`
- request: none
- response:
  - `200`: `[ { identityNumber: '3212345678901212',
                fullName: 'Foxie Fox',
                address: 'Jl. Sultan Iskandar Muda No.7',
                birthDate: '12/12/1990',
                gender: 'male'  
              } ]`

# Release 2
Buatlah endpoint untuk seorang customer dapat membuat sebuah account baru pada Hacktiv8 Bank.
Terdapat 3 Type account saat ingin membuka account baru yaitu `On Account`, `Xtra Payroll`  dan `Tabunganku`.

Req:
- `accountNumber` akan teriisi secara otomatis dan random sebanyak 10 digit
- `balance` minimum 500000, jika kurang maka munculkan pesan error: 'Minimum balance for new Account: Rp500.000'. Jika balance tidak dikirimkan saat hit endpoint, maka secara default balance nya adalah 500000

- route:
  - `POST /customers/newAccount`
- request:
  - headers: { otp: '...' }
  - body
    - `{  
         accountType: 'On Account',
         balance: 500000
       }`
- response:
  - `201`: `{ accountNumber: '...', balance: 500000 }`
