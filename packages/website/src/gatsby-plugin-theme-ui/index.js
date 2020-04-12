// example theme file
export default {
  "space": [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  "fonts": {
    "body": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
    "heading": "inherit",
    "monospace": "Menlo, monospace"
  },
  "fontSizes": [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  "fontWeights": {
    "body": 400,
    "heading": 700,
    "bold": 700
  },
  "lineHeights": {
    "body": 1.5,
    "heading": 1.125
  },
  "colors": {
    "text": "#000",
    "background": "#fff",
    "primary": "#07c",
    "secondary": "#30c",
    "muted": "#f6f6f6"
  },
  "links": {
    nav: {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover':{
        textDecoration: 'underline',
      }
    }
  },
  forms: {
    input: {
      textAlign: 'center',
      width: '100%',
      border: 'none',
      borderRadius: 1000,
      backgroundColor: '#EAEAEA',
      my: "80px",
      py: '10px',
      outline: 'none',
    }
  },
  "styles": {
    "root": {
      "fontFamily": "body",
      "lineHeight": "body",
      "fontWeight": "body",
      '& *:focus': {
        boxShadow: '0 0 0 3px rgba(118, 66, 255, .6)',
        outline: 'none'
      }
    },
    "h1": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 5
    },
    "h2": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 4
    },
    "h3": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 3
    },
    "h4": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 2
    },
    "h5": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 1
    },
    "h6": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 0
    },
    "p": {
      "color": "text",
      "fontFamily": "body",
      "fontWeight": "body",
      "lineHeight": "body"
    },
    "a": {
      "color": "primary"
    },
    "pre": {
      "fontFamily": "monospace",
      "overflowX": "auto",
      "code": {
        "color": "inherit"
      }
    },
    "code": {
      "fontFamily": "monospace",
      "fontSize": "inherit"
    },
    "table": {
      "width": "100%",
      "borderCollapse": "separate",
      "borderSpacing": 0
    },
    "th": {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    "td": {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    "img": {
      "maxWidth": "100%"
    }
  }
}