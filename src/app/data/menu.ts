

export type MenuItem = {
  label: string;
  href: string;
};

export const MenuItems1: MenuItem[] = [
  { label: "Sejarah Singkat", href: "/sejarah" },
  { label: "Visi , Misi , Tujuan dan Sasaran", href: "/visimisi" },
  { label: "Struktur Organisasi", href: "/struktur-organisasi" },
];
export const MenuItems2: MenuItem[] = [
  { label: "Prodi", href: "/program-studi" },
  { label: "Informasi Biaya Pendidikan", href: "/biaya-pendidikan" },
  { label: "Kalender Akademik", href: "/kalender-akademik" },
  { label: "Buku Panduan Akademik", href: "/panduan-akademik" },
];
export const MenuItems3: MenuItem[] = [
  { label: "Biro Akademik", href: "/biro-akademik" },
  { label: "Keuangan", href: "/biro-keuangan" },
  { label: "TI", href: "/biro-informasi" },
  { label: "SDM", href: "/biro-sdm" },
];
