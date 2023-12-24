const date=document.getElementById('tanggal');
const day=document.getElementById('hari');
const month=document.getElementById('bulan');
const year=document.getElementById('tahun');

const today=new Date();

const days=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
const allmonths=['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', ' Agustus', 'September', 'Oktober',' November','Desember']

date.innerHTML=today.getDate();
day.innerHTML=days[today.getDay()];
month.innerHTML=allmonths[today.getMonth()];
year.innerHTML=today.getFullYear();