export interface GameTitle {
  name: string;
  company?: string;
  videoId?: string;
}

export interface YearData {
  year: number;
  titles: GameTitle[];
}

export const adoptionData: YearData[] = [
  {
    year: 2026,
    titles: [
      {name: 'ドラゴンクエストVII Reimagined', company: 'SQUARE ENIX', videoId: 'pJJdXusrAzg'},
    ],
  },
  {
    year: 2025,
    titles: [
      {name: 'ゼンシンマシンガール', company: "YUKE'S / D3 PUBLISHER", videoId: 'x4BewvaBCmI'},
      {name: 'SILENT HILL f', company: 'KONAMI', videoId: '0OqTeE3y1x0'},
      {name: 'ソニックレーシング クロスワールド', company: 'SEGA', videoId: 'Ks_Uxuhz6nc'},
      {name: 'METAL GEAR SOLID Δ: SNAKE EATER', company: 'KONAMI', videoId: '6WuqxGg0yek'},
      {name: '餓狼伝説 City of the Wolves', company: 'SNK CORPORATION', videoId: 'uBBsQiifm5w'},
      {name: 'Dolls Nest', company: 'ニトロプラス', videoId: 'XJZ-VX4QSw8'},
      {name: 'Clair Obscur: Expedition 33', company: 'Sandfall Interactive / Kepler Interactive', videoId: 'ejgW-upPMgk'},
      {name: 'Ninja Gaiden 2 Black', company: 'Team NINJA / KOEI TECMO', videoId: '45eAlLDQA6I'},
    ],
  },
  {
    year: 2024,
    titles: [
      {name: 'ロマンシング サガ2 リベンジオブザセブン', company: 'SQUARE ENIX', videoId: 'O56vQEZ_j8w'},
      {name: 'ロリポップチェーンソー RePOP', company: 'Dragami Games', videoId: 'GQfduytrjNI'},
      {name: '聖剣伝説 VISIONS of MANA', company: 'SQUARE ENIX', videoId: 'k7MGvDzHJ00'},
      {name: '真・女神転生V Vengeance', company: 'ATLUS / SEGA', videoId: 'TZaGO8Os_fw'},
      {name: '鳴潮 (Wuthering Waves)', company: 'KURO GAMES', videoId: 'jeIouRAxR1E'},
      {name: 'Stellar Blade', company: 'SHIFT UP', videoId: 'SdfD9pDXvow'},
      {name: 'SAND LAND', company: 'Bandai Namco Entertainment', videoId: 'mOkfVX-eHIQ'},
      {name: 'とらえら / あるびぃ', company: 'MIXI', videoId: 'GIbbEzX96NQ'},
      {name: 'プリンセスピーチ Showtime!', company: 'Nintendo', videoId: 'ZPVuFRzHsFU'},
      {name: 'ペルソナ3 リロード', company: 'ATLUS / SEGA', videoId: 'yQBy6JXQ78U'},
      {name: '呪術廻戦 戦華双乱', company: 'Bandai Namco Entertainment', videoId: 'C06OoAdE7-w'},
      {name: 'TEKKEN 8', company: 'Bandai Namco Entertainment', videoId: 'uspZCOUWfRY'},
    ],
  },
  {
    year: 2023,
    titles: [
      {name: 'グランブルーファンタジーヴァーサス -ライジング-', company: 'Cygames / ARC SYSTEM WORKS', videoId: 'pKKFK-luWOw'},
      {name: 'FREDERICA', company: 'Marvelous', videoId: 'alvGKkvz-a8'},
      {name: 'Lies of P', company: 'NEOWIZ', videoId: 'kXZoKdr-xeo'},
      {name: 'なつもん！ 20世紀の夏休み', company: 'Spike Chunsoft', videoId: '3Ofz97sZ6ZI'},
      {name: '超探偵事件簿 レインコード', company: 'Spike Chunsoft', videoId: 'RGI05R8P_0Y'},
      {name: 'BLUE PROTOCOL', company: 'Bandai Namco Online / Bandai Namco Studios', videoId: 'xtzsuQgSPsU'},
      {name: 'NANASHI Sing up vol.1', company: '774inc.', videoId: 'jHP8bx_IXPQ'},
    ],
  },
  {
    year: 2022,
    titles: [
      {name: 'ドラゴンクエスト トレジャーズ 蒼き瞳と大空の羅針盤', company: 'SQUARE ENIX', videoId: 'lnxdSgrfIFo'},
      {name: 'HARVESTELLA', company: 'SQUARE ENIX', videoId: 'jGrBvKF8xGw'},
      {name: 'ディオフィールドクロニクル', company: 'SQUARE ENIX', videoId: 'MnAkc29rL0U'},
      {name: 'ガンダムエボリューション', company: 'バンダイナムコオンライン', videoId: 'Xll1G4pW4tU'},
      {name: 'Tower of Fantasy（幻塔）', company: 'Hotta Studio / Proxima Beta', videoId: 'hMkJWe4nlIQ'},
      {name: 'THE KING OF FIGHTERS XV', company: 'SNK CORPORATION', videoId: 'VVrjFY7bfn0'},
      {name: 'ブレイブリーデフォルト ブリリアントライツ', company: 'SQUARE ENIX', videoId: 'pyXh2WjCkJA'},
    ],
  },
  {
    year: 2021,
    titles: [
      {name: 'FINAL FANTASY VII THE FIRST SOLDIER', company: 'SQUARE ENIX', videoId: 'VZ4pd8huTzk'},
      {name: '真・女神転生V', company: 'ATLUS / SEGA', videoId: 'bhOp46wNy-Q'},
      {name: 'No More Heroes III', company: 'Marvelous / Grasshopper Manufacture', videoId: 'aTWgYghqaF8'},
      {name: 'SCARLET NEXUS', company: 'Bandai Namco Entertainment', videoId: 'xWC2d0ZrOk4'},
      {name: 'Caligula2', company: 'FURYU Corporation', videoId: 'fngwHf3aIGg'},
      {name: 'BRAVELY DEFAULT II', company: 'SQUARE ENIX', videoId: 'MX1-vxefI6I'},
    ],
  },
  {
    year: 2020,
    titles: [
      {name: '聖剣伝説3 TRIALS of MANA', company: 'SQUARE ENIX', videoId: '_sQhI6W1Vpo'},
    ],
  },
];
