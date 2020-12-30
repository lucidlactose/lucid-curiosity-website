// @flow

// types
export type ItemListType = {
  items: ItemType[],
};

export type ItemType = {
  id: number,
  quantity: number,
  name: string,
  description: string,
};

// coloring
export const DashedLineGrey = '#AAA';
export const BackgroundSkyBlue = '#5A8CA0';
export const BackgroundGrey = '#808080';
export const TextGrey = '#AAA';
export const SomethingBlue = '#AFD7FF';
export const BackgroundDarkWhite = '#EEE';

/*
    COMPONENT IMPORT ORDER
    - React dependencies
    - Fusion dependencies
    - React router dependencies
    - Foreign packages (react-dropzone)
    - top level folder dependenceies (ie styles/ values)
    - components from a different folder
    - alphabetize same level components


    COMPONENT STYLE ORDER

    This is made as how I seem to prefer adding the styles. Obviously not all of these will be in one div.
    I try to organize them based on relation to each other and how they effect each other.
    The order I try to maintain is more or less:
        - coloring and font
        - display and alignment
        - borders
        - sizes
        - spaces between
        - and xyz position

    Order of CSS components
    {
        backgroundColor
        background
        color
        fontSize
        fontFamily
        display
        flex
        justifyContent
        alignItems
        lineHeight
        border
        borderWidth
        borderStyle
        borderColor
        borderRadius
        boxSizing
        height
        width
        minHeight
        minWidth
        maxHeight
        maxWidth
        overflow
        overflowX
        overflowY
        margin
        marginTop
        marginRight
        marginBottom
        marginLeft
        padding
        paddingTop
        paddingRight
        paddingBottom
        paddingLeft
        position
        top
        down
        left
        right
        z-index
    }
*/
