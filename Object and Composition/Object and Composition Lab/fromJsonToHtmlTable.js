function fromJsonToHtmlTable(input) {
    const data = JSON.parse(input);
    const result = [];

    const props = Object.keys(data[0]);
    result.push('<table>');
    result.push(`  <tr>${props.map(p => `<th>${escapeHtml(p)}</th>`).join('')}</tr>`);
    for (const entry of data) {
        result.push(`  <tr>${props.map(p => `<td>${escapeHtml(entry[p])}</td>`).join('')}</tr>`);
    }

    result.push('</table>');

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    
    return result.join('\n');
}

// console.log(fromJsonToHtmlTable(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`
// ));

console.log(fromJsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
));