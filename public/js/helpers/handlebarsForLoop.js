export function handlebarsForLoop() {
    Handlebars.registerHelper('times', function (n, block) {

        let accum = '';

        for (let i = 1; i < n + 1; i += 1){
            accum += block.fn(i);            
        }

        return accum;
    });
}