const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', {}, 'i am an h1 tag'),
        React.createElement('h2', {}, 'i am an h2 tag')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'i am an h1 tag'),
        React.createElement('h2', {}, 'i am an h2 tag')
    ])
    ]);
    
    console.log(parent);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);


// const parent = React.createElement(
//     'div',{ id: 'parent' },
//     React.createElement('div', { id: 'child' }),
//     React.createElement('div',{ id: 'child2' },
//     React.createElement('h1', { id: 'heading' }, 'this is the h1 tag'),
//     React.createElement('p', { id: 'paragraph1' }, 'this is the paragraph tag'),
//     React.createElement('p', { id: 'paragraph2' }, 'this is the paragraph 2 tag')
//     ),
//     React.createElement(
//     'div',
//     { id: 'child3' },
//     React.createElement('h1', { id: 'heading' }, 'this is the h1 tag'),
//     React.createElement('p', { id: 'paragraph1' }, 'this is the paragraph tag'),
//     React.createElement('p', { id: 'paragraph2' }, 'this is the paragraph 2 tag')
//     )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);



// const parent = React.createElement(
//     'div',
//     { id: 'parent' },
//     React.createElement('div', { id: 'child' }),
//     [React.createElement('h1', { id: 'heading' }, 'this is the h1 tag',
//         React.createElement('p', { id: 'paragraph1' }, 'this is the paragraph tag'),
//         React.createElement('p', { id: 'paragraph2' }, 'this is the paragraph 2 tag')
//     )]
//     );
//     console.log(parent)
//     const root=ReactDOM.createRoot(document.getElementById("root"))
//     root.render(parent);
    

// const parent = React.createElement(
//     'div',
//     { id: 'parent' },
//     React.createElement('div', { id: 'child' }),
//     React.createElement('h1', { id: 'heading' }, 'this is the h1 tag',
//         React.createElement('h2', { id: 'heading2' }, 'this is the heading 2 tag')
//     )
//     );

// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);