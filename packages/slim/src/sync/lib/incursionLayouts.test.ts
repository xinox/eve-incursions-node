import {describe, expect, it} from 'vitest';
import {parseIncursionSystemTypes} from './incursionLayouts';

const layouts = `
{| class="wikitable"
|-
| [https://evemaps.dotlan.net/map/Khanid/Homroon#sec Homroon]
| Neda
| Chitiamem, Zahefeus, Zephan
| Kuhri, Nandeza
| Dimoohan
|-
| [https://evemaps.dotlan.net/map/Impass/05M-I1#sec 05M-I1]
| UK-SHL
| 01TG-J, U3SQ-X, A1BK-A
| L6BY-P, NUG-OF
| E7VE-V
|}
`;

describe('parseIncursionSystemTypes', () => {
  it('maps Vanguard, Assault, and Headquarters systems', () => {
    const types = parseIncursionSystemTypes(layouts, 'Homroon', [
      {id: 1, name: 'Neda'},
      {id: 2, name: 'Chitiamem'},
      {id: 3, name: 'Nandeza'},
      {id: 4, name: 'Dimoohan'},
    ]);

    expect([...types.entries()]).toEqual([
      [2, 'Vanguard'],
      [3, 'Assault'],
      [4, 'Headquarters'],
    ]);
  });

  it('matches system names containing digits and hyphens exactly', () => {
    const types = parseIncursionSystemTypes(layouts, '05M-I1', [
      {id: 1, name: '01TG-J'},
      {id: 2, name: 'L6BY-P'},
      {id: 3, name: 'E7VE-V'},
      {id: 4, name: 'UK-SHL'},
    ]);

    expect([...types.values()]).toEqual(['Vanguard', 'Assault', 'Headquarters']);
  });
});
