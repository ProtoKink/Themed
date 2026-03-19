export const _Image = {
  doNotColorizeImageIncludes: [
    'Assets/Female3DCG/',
    'Backgrounds/',
    'Icons/Struggle/',
    'Icons/LARP/',
    'Icons/MagicBattle/',
    'Screens/',
    'http'
  ],

  doColorizeImageIncludes: [
    PUBLIC_URL
  ],

  doNotColorizeImages: [
    'Icons/Accept.png',
    'Icons/Activity.png',
    'Icons/Arousal.png',
    'Icons/Audio.png',
    'Icons/BlindToggle2.png',
    'Icons/Cancel.png',
    'Icons/Cell.png',
    'Icons/Checked.png',
    'Icons/ClubCard.png',
    'Icons/Controller.png',
    'Icons/Crafting.png',
    'Icons/Exit.png',
    'Icons/Explore.png',
    'Icons/Gavel.png',
    'Icons/Gender.png',
    'Icons/Infiltration.png',
    'Icons/Lock.png',
    'Icons/LockMenu.png',
    'Icons/MagicSchool.png',
    'Icons/Online.png',
    'Icons/Platform.png',
    'Icons/Poker.png',
    'Icons/Search.png',
    'Icons/Security.png',
    'Icons/ServiceBell.png',
    'Icons/Title.png',
    'Icons/Use.png',
    'Icons/WinkNone.png',
    'Icons/Color.png',
    'Icons/ColorChange.png',
    'Icons/ColorChangeMulti.png',
    'Icons/Small/ColorBlocked.png',
    'Icons/Small/ColorChange.png',
    'Icons/Small/ColorChangeMulti.png',
    'Icons/Small/Naked.png',
    'Icons/Small/Use.png',
    'Icons/Small/YouTube.png',
  ],

  doColorizeImages: [
    ''
  ],

  doNotColorizeHTMLImageIncludes: [
    'Assets/Female3DCG/',
    'Backgrounds/',
    'Icons/Struggle/',
    'Icons/LARP/',
    'Icons/MagicBattle/',
    'Screens/',
    'http',
    'data:'
  ],

  doColorizeHTMLImageIncludes: [
    PUBLIC_URL
  ],

  doNotColorizeHTMLImages: [
    'Icons/Information.svg',
    'Icons/Search.png',
    'Icons/CaretUp.svg',
    'Icons/cross.svg',
    'Icons/RoomTypeNormal.svg',
    'Icons/RoomTypeHybrid.svg',
    'Icons/RoomTypeMap.svg',
    'Icons/Female.svg',
    'Icons/Gender.svg',
    'Icons/Male.svg',
    'Icons/Accept.png',
    'Icons/Activity.png',
    'Icons/Arousal.png',
    'Icons/Audio.png',
    'Icons/BlindToggle2.png',
    'Icons/Cancel.png',
    'Icons/Cell.png',
    'Icons/Checked.png',
    'Icons/ClubCard.png',
    'Icons/Controller.png',
    'Icons/Crafting.png',
    'Icons/Exit.png',
    'Icons/Explore.png',
    'Icons/Gavel.png',
    'Icons/Gender.png',
    'Icons/Infiltration.png',
    'Icons/Lock.png',
    'Icons/LockMenu.png',
    'Icons/MagicSchool.png',
    'Icons/Online.png',
    'Icons/Platform.png',
    'Icons/Poker.png',
    'Icons/Search.png',
    'Icons/Security.png',
    'Icons/ServiceBell.png',
    'Icons/Title.png',
    'Icons/Use.png',
    'Icons/WinkNone.png',
    'Icons/Color.png',
    'Icons/ColorChange.png',
    'Icons/ColorChangeMulti.png',
    'Icons/Small/ColorBlocked.png',
    'Icons/Small/ColorChange.png',
    'Icons/Small/ColorChangeMulti.png',
    'Icons/Small/Naked.png',
    'Icons/Small/Use.png',
    'Icons/Small/YouTube.png',
  ],

  doColorizeHTMLImages: [
    ''
  ],

  doColorizeImage(source: string) {
    if (!source) return false;
    if (typeof source !== 'string') return false;
    let doDraw = true;

    if (doDraw) {
      const includesFolder = _Image.doNotColorizeImageIncludes.some(prefix => source.startsWith(prefix));
      const includesFile = _Image.doNotColorizeImages.includes(source);
      if (includesFolder || includesFile) {
        doDraw = false;
      }
    }

    if (!doDraw) {
      const includesFolder = _Image.doColorizeImageIncludes.some(prefix => source.startsWith(prefix));
      const includesFile = _Image.doColorizeImages.includes(source);
      if (includesFolder || includesFile) {
        doDraw = true;
      }
    }

    return doDraw;
  },

  doColorizeHTMLImage(source: string) {
    if (!source) return false;
    if (typeof source !== 'string') return false;
    let doDraw = true;

    if (doDraw) {
      const includesFolder = _Image.doNotColorizeHTMLImageIncludes.some(prefix => source.startsWith(prefix) || source.startsWith('./' + prefix));
      const includesFile = _Image.doNotColorizeHTMLImages.includes(source);
      if (includesFolder || includesFile) {
        doDraw = false;
      }
    }

    if (!doDraw) {
      const includesFolder = _Image.doColorizeHTMLImageIncludes.some(prefix => source.startsWith(prefix) || source.startsWith('./' + prefix));
      const includesFile = _Image.doColorizeHTMLImages.includes(source);
      if (includesFolder || includesFile) {
        doDraw = true;
      }
    }

    return doDraw;
  },
};

export function drawRect(x: number, y: number, width: number, height: number, backgroundColor: string, borderColor: string) {
  DrawRect(x, y, width, height, backgroundColor);
  DrawEmptyRect(x, y, width, height, borderColor, 2);
}

export function drawButtonRect(
  x: number,
  y: number,
  width: number,
  height: number,
  backgroundColor: string,
  backgroundHoverColor: string,
  backgroundDisabledColor: string,
  borderColor: string,
  borderHoverColor: string,
  borderDisabledColor: string,
  isHovering: boolean,
  disabled: boolean
) {
  if (!isHovering && !disabled) drawRect(x, y, width, height, backgroundColor, borderColor);
  else if (isHovering && !disabled) drawRect(x, y, width, height, backgroundHoverColor, borderHoverColor);
  else if (disabled) drawRect(x, y, width, height, backgroundDisabledColor, borderDisabledColor);
}
