type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([classNames, value]) => Boolean(value))
            .map(([classNames, value]) => classNames),
    ].join(' ');
}

// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
// output = 'remove-btn hovered selectable pdg'
