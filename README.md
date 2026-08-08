# Xanaa-MD

Bot WhatsApp pemula dengan:
- Nama bot: Xanaa-MD
- Owner: Kenzy Official
- Nomor owner: 6289674116378
- Prefix: .
- Branding pairing: XANABOTZ

## 1. Install

Pastikan Node.js 20+ tersedia.

```bash
npm install
npm start
```

Saat pertama kali berjalan, masukkan nomor WhatsApp dengan kode negara, tanpa `+`, spasi, atau `-`.

WhatsApp -> Perangkat tertaut -> Tautkan dengan nomor telepon.

## 2. QR

Socket diatur dengan `printQRInTerminal: true`, sehingga QR dapat tampil pada terminal jika koneksi memunculkan QR.

## 3. Pairing

`config.js` memiliki:

```js
pairingCode: "XANABOTZ"
```

Kode pairing WhatsApp yang benar-benar diterima tetap bergantung pada API Baileys/WhatsApp yang sedang digunakan. Pada rilis yang tidak mendukung custom pairing code, WhatsApp akan menghasilkan pairing code sendiri.

## 4. Commands

```text
.menu
.help anime
.help convert
.help downloader
.help group
.help game
.help tools
.help sticker
.help owner
.ping
.runtime
.owner
.tagall
.groupinfo
.tebakangka
```

## 5. Catatan

File downloader dan converter sengaja dibuat sebagai starter agar pemula dapat memasukkan API/FFmpeg sendiri. Jangan gunakan bot untuk spam, penipuan, atau pengiriman massal yang melanggar aturan WhatsApp.

## Struktur

commands/
database/
event/
lib/media/
lib/
temp/
config.js
index.js
main.js
package.json
Dockerfile
README.md
