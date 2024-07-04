import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import React, { useState } from 'react'

// <T> is a generic type that allows you to define the type of the items in the dropdown
// this way you can pass any type of item to the dropdown
// and then shape of the item will be defined in your usage of the dropdown
// we want all options to minimally have a label and an id so we define that in the DropdownOption type
type DropdownOption<T> = T & { label: string; id: string }
type DropdownProps<T> = {
    icon: React.ReactNode
    // ? means that the prop is optional
    tooltip?: string
    options: DropdownOption<T>[]
    onSelect: (item: DropdownOption<T>) => void
    renderItem: (item: DropdownOption<T>) => React.ReactNode
}
function IconDropdown<T>({ icon, options, onSelect, renderItem, tooltip }: DropdownProps<DropdownOption<T>>) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    return (
        <Box>
            <Tooltip title={tooltip || 'Open Menu'} arrow>
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ p: 0 }}>
                    {icon}
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} onClick={() => onSelect(option)}>
                        {renderItem(option)}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default IconDropdown
