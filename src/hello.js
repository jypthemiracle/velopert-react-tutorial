import React from 'react';

function Hello({color, name, isSpecial}) {
    return <div style={{ color }}>
        {isSpecial ? <b>얼른 오세요. </b> : null}
        안녕하세요 {name}
    </div>
}

Hello.defaultProps = {
    name: "undefined"
}

export default Hello;