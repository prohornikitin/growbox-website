import recursiveAssign from 'recursive-object-assign'


const defaultStyle = {
    container: {
        fontSize: '0.5rem',
        height: '100%',
        backgroundColor: '#eae6eb77',
        borderRadius: '8px',
    },
    item: {
        textAlign: 'center',
    },
    separator: {
        width: '1px',
        marginTop: '8px',
        marginBottom: '8px',
        backgroundColor: '#303030',
        borderRadius: '0.5px',
    },
    text: {
        color: '#303030',
    },
    thumb: {
        height: '100%',
        padding: '4px 4px',
        transition: '0.45s cubic-bezier(0,-0.5,0,1.1)',
    },
    thumbVisible: {
        borderRadius: '6px',
        height: '100%',
        width: '100%',
        background: '#FFF',
    }
}



export function generateStyle(style, segments_count) {
    style = recursiveAssign(defaultStyle, style)
    const absoluteStyle = {
        container: {
            fontSize: '0.5rem',
        },
        item: {
            width: `calc(${100 / segments_count}% - ${(segments_count - 1) / segments_count} * ${style.separator.width} )`,
            position: 'relative',
            float: 'left',
        },
        separator: {
            float: 'left',
            zIndex: 1,
            height: `calc(100% - ${style.separator.marginTop} - ${style.separator.marginBottom})`,
            marginTop: style.separator.marginTop,
            marginBottom: style.separator.marginBottom,
            marginLeft: 0,
            marginRight: 0,
        },
        label: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            position: 'relative',
            zIndex: 2,
        },
        thumb: {
            height: '100%',
            margin: 0,
            position: 'relative',
            zIndex: 1,
            visibility: 'hidden',
            width: `${100 / segments_count}%`,
        },
        thumbVisible: {
            visibility: 'visible',
        }
    }
    return recursiveAssign(style, absoluteStyle)
}