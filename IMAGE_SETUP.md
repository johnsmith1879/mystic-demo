# Image Setup Instructions

Скопируй изображения из исходных папок в папку проекта согласно таблицам ниже.

## ESPN Studio X

**Источник:** `D:\Projects\Mystic-demo\Main_info — copy\Projects\ESPN Studio X\Pictures\`
**Назначение:** `D:\Projects\Mystic-demo\Mystic-demo\public\images\projects\espn-studio-x\`

| Исходный файл | Новое имя |
|---------------|-----------|
| `sportscenter-studio-x-anchor-desk-wide.jfif` | `hero.jpg` |
| `custom-anchor-desk-high-gloss-floor.jfif` | `card.jpg` |
| `large-format-led-display-wood-trim.jfif` | `gallery-1.jpg` |
| `broadcast-studio-depth-monitor-array.jfif` | `gallery-2.jpg` |
| `interactive-analyst-area-pendant-lighting.jfif` | `gallery-3.jpg` |
| `studio-architecture-ribbed-ceiling-detail.jfif` | `gallery-4.jpg` |
| `stand-up-area-led-floor-graphics.jfif` | `gallery-5.jpg` |

---

## Amazon NBA Studio

**Источник:** `D:\Projects\Mystic-demo\Main_info — copy\Projects\NBA on Prime (Amazon)\Pictures\`
**Назначение:** `D:\Projects\Mystic-demo\Mystic-demo\public\images\projects\amazon-nba-studio\`

| Исходный файл | Новое имя |
|---------------|-----------|
| `nba-on-prime-studio-atrium-wide-shot-set-design.jfif` | `hero.jpg` |
| `amazon-prime-nba-anchor-desk-fabrication.jpg` | `card.jpg` |
| `amazon-nba-studio-basketball-video-wall.jfif` | `gallery-1.jpg` |
| `nba-prime-video-virtual-court-multimedia-led-walls.jfif` | `gallery-2.jpg` |
| `studio-set-fabrication-wood-staircase-mezzanine-detail.jfif` | `gallery-3.jpg` |
| `amazon-prime-video-nba-studio-green-room-lounge.jfif` | `gallery-4.jpg` |

---

## MSNBC Studio 3A

**Источник:** `D:\Projects\Mystic-demo\Main_info — copy\Projects\MSNBC Studio 3A\Pictures\`
**Назначение:** `D:\Projects\Mystic-demo\Mystic-demo\public\images\projects\msnbc-studio-3a\`

| Исходный файл | Новое имя |
|---------------|-----------|
| `msnbc-flagship-studio-wide-view-fabrication.jpg` | `hero.jpg` |
| `chris-hayes-set-curved-led-video-wall-integration.jpg` | `card.jpg` |
| `msnbc-studio-main-archway-entrance-design.jpg` | `gallery-1.jpg` |
| `custom-thermoformed-acrylic-broadcast-desk.jpg` | `gallery-2.jpg` |
| `anchor-desk-wood-and-acrylic-joinery-detail.jpg` | `gallery-3.jpg` |
| `interview-set-faux-window-led-backdrop-fabrication.jpg` | `gallery-4.jpg` |
| `studio-set-vertical-led-column-cladding.jpg` | `gallery-5.jpg` |

---

## Быстрый способ (PowerShell)

Открой PowerShell в папке `D:\Projects\Mystic-demo\` и выполни:

```powershell
# ESPN Studio X
Copy-Item "Main_info — copy\Projects\ESPN Studio X\Pictures\sportscenter-studio-x-anchor-desk-wide.jfif" "Mystic-demo\public\images\projects\espn-studio-x\hero.jpg"
Copy-Item "Main_info — copy\Projects\ESPN Studio X\Pictures\custom-anchor-desk-high-gloss-floor.jfif" "Mystic-demo\public\images\projects\espn-studio-x\card.jpg"
Copy-Item "Main_info — copy\Projects\ESPN Studio X\Pictures\large-format-led-display-wood-trim.jfif" "Mystic-demo\public\images\projects\espn-studio-x\gallery-1.jpg"
Copy-Item "Main_info — copy\Projects\ESPN Studio X\Pictures\broadcast-studio-depth-monitor-array.jfif" "Mystic-demo\public\images\projects\espn-studio-x\gallery-2.jpg"
Copy-Item "Main_info — copy\Projects\ESPN Studio X\Pictures\interactive-analyst-area-pendant-lighting.jfif" "Mystic-demo\public\images\projects\espn-studio-x\gallery-3.jpg"
Copy-Item "Main_info — copy\Projects\ESPN Studio X\Pictures\studio-architecture-ribbed-ceiling-detail.jfif" "Mystic-demo\public\images\projects\espn-studio-x\gallery-4.jpg"
Copy-Item "Main_info — copy\Projects\ESPN Studio X\Pictures\stand-up-area-led-floor-graphics.jfif" "Mystic-demo\public\images\projects\espn-studio-x\gallery-5.jpg"

# Amazon NBA Studio
Copy-Item "Main_info — copy\Projects\NBA on Prime (Amazon)\Pictures\nba-on-prime-studio-atrium-wide-shot-set-design.jfif" "Mystic-demo\public\images\projects\amazon-nba-studio\hero.jpg"
Copy-Item "Main_info — copy\Projects\NBA on Prime (Amazon)\Pictures\amazon-prime-nba-anchor-desk-fabrication.jpg" "Mystic-demo\public\images\projects\amazon-nba-studio\card.jpg"
Copy-Item "Main_info — copy\Projects\NBA on Prime (Amazon)\Pictures\amazon-nba-studio-basketball-video-wall.jfif" "Mystic-demo\public\images\projects\amazon-nba-studio\gallery-1.jpg"
Copy-Item "Main_info — copy\Projects\NBA on Prime (Amazon)\Pictures\nba-prime-video-virtual-court-multimedia-led-walls.jfif" "Mystic-demo\public\images\projects\amazon-nba-studio\gallery-2.jpg"
Copy-Item "Main_info — copy\Projects\NBA on Prime (Amazon)\Pictures\studio-set-fabrication-wood-staircase-mezzanine-detail.jfif" "Mystic-demo\public\images\projects\amazon-nba-studio\gallery-3.jpg"
Copy-Item "Main_info — copy\Projects\NBA on Prime (Amazon)\Pictures\amazon-prime-video-nba-studio-green-room-lounge.jfif" "Mystic-demo\public\images\projects\amazon-nba-studio\gallery-4.jpg"

# MSNBC Studio 3A
Copy-Item "Main_info — copy\Projects\MSNBC Studio 3A\Pictures\msnbc-flagship-studio-wide-view-fabrication.jpg" "Mystic-demo\public\images\projects\msnbc-studio-3a\hero.jpg"
Copy-Item "Main_info — copy\Projects\MSNBC Studio 3A\Pictures\chris-hayes-set-curved-led-video-wall-integration.jpg" "Mystic-demo\public\images\projects\msnbc-studio-3a\card.jpg"
Copy-Item "Main_info — copy\Projects\MSNBC Studio 3A\Pictures\msnbc-studio-main-archway-entrance-design.jpg" "Mystic-demo\public\images\projects\msnbc-studio-3a\gallery-1.jpg"
Copy-Item "Main_info — copy\Projects\MSNBC Studio 3A\Pictures\custom-thermoformed-acrylic-broadcast-desk.jpg" "Mystic-demo\public\images\projects\msnbc-studio-3a\gallery-2.jpg"
Copy-Item "Main_info — copy\Projects\MSNBC Studio 3A\Pictures\anchor-desk-wood-and-acrylic-joinery-detail.jpg" "Mystic-demo\public\images\projects\msnbc-studio-3a\gallery-3.jpg"
Copy-Item "Main_info — copy\Projects\MSNBC Studio 3A\Pictures\interview-set-faux-window-led-backdrop-fabrication.jpg" "Mystic-demo\public\images\projects\msnbc-studio-3a\gallery-4.jpg"
Copy-Item "Main_info — copy\Projects\MSNBC Studio 3A\Pictures\studio-set-vertical-led-column-cladding.jpg" "Mystic-demo\public\images\projects\msnbc-studio-3a\gallery-5.jpg"
```

После копирования обнови страницу в браузере — изображения появятся!
