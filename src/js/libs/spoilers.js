//   ===================================================Спойлеры=======================================================
{/* <details>
    <summary class="_spoiler-js">Заголовок 1</summary>
        <div class="spoiler-content">
            Контент 1
        </div>
</details> */}
// -----------------------------------------------------------------------------------------------

import { Spoilers } from "../vendor/spoilers.js";

const spoilers = new Spoilers({
    item: 'faq__spoiler', /*класс споилера*/
    timeAnimation: 300, /*время анимации*/
    accordion: true,    /*Режим аккордиона*/
    firstOpen: true    /*Первый элемент всегда открыт*/
})

const servicesSpoilers = new Spoilers({
    item: 'services_spoiler', /*класс споилера*/
    timeAnimation: 300, /*время анимации*/
    accordion: true,    /*Режим аккордиона*/
    firstOpen: false    /*Первый элемент всегда открыт*/
})



