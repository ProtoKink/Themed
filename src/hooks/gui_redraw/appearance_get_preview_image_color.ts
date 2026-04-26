import { HookPriority, sdk } from 'bc-deeplib/deeplib';
import { doRedraw } from '../../modules/gui_redraw';
import { plainColors, specialColors } from '../../utilities/color';
import { ModuleCategory } from '../../utilities/mod_definition';

export function hookAppearanceGetPreviewImageColor() {
  sdk.hookFunction('AppearanceGetPreviewImageColor', HookPriority.Observe, (args, next) => {
    if (!doRedraw()) return next(args);

    const [c, item, hover] = args;

    if (DialogMenuMode === 'permissions' && c.IsPlayer()) {
      let permission: keyof typeof specialColors = 'allowed';
      if (InventoryIsPermissionBlocked(c, item.Asset.Name, item.Asset.Group.Name)) permission = 'blocked';
      else if (InventoryIsPermissionLimited(c, item.Asset.Name, item.Asset.Group.Name)) permission = 'limited';
      return item.Worn ? specialColors.equipped[hover ? 1 : 0] : specialColors[permission][hover ? 1 : 0];
    } else {
      const unusable = item.SortOrder.startsWith(DialogSortOrder.Unusable.toString())
        || item.SortOrder.startsWith(DialogSortOrder.TargetFavoriteUnusable.toString())
        || item.SortOrder.startsWith(DialogSortOrder.PlayerFavoriteUnusable.toString());
      const blocked = item.SortOrder.startsWith(DialogSortOrder.Blocked.toString());
      const limited = item.Icons.includes('AllowedLimited');
      if (blocked) return specialColors.blocked[hover ? 1 : 0];
      else if (item.Worn) return specialColors.equipped[hover ? 1 : 0];
      else if ((item.Craft != null) && (item.Craft.Name != null)) return specialColors.crafted[hover ? 1 : 0];
      else if (unusable) return plainColors.elementDisabled;
      else if (limited) return specialColors.limited[hover ? 1 : 0];
      else return hover ? plainColors.elementHover : plainColors.element;
    }
  }, ModuleCategory.GuiRedraw);
}
