// --- ESTRUTURA DE DADOS E CONSTANTES GLOBAIS ---
const FUNCTIONS_METADATA = {
    "SE": { signature: "Se( ‘teste_lógico’ , ‘valor_se_verdadeiro’ , ‘valor_se_falso’ )" },
    "DIA": { signature: "Dia( ‘data’ )" },
    "MES": { signature: "Mes( ‘data’ )" },
    "ANO": { signature: "Ano( ‘data’ )" },
    "HORA": { signature: "Hora( ‘data’ )" },
    "MINUTO": { signature: "Minuto( ‘data’ )" },
    "SEGUNDO": { signature: "Segundo( ‘data’ )" },
    "AGORA": { signature: "Agora( )" },
    "DATA": { signature: "Data( ‘data’ )" },
    "DIASEMANA": { signature: "DiaSemana( ‘data’ )" },
    "DIFDATA": { signature: "DifData( ‘texto_unidade’ , ‘data01’ , ‘data02’ )" },
    "FORMATADATA": { signature: "FormataData( ‘data’ , ‘texto_formato’ )" },
    "GERADATACOMTEXTO": { signature: "GeraDataComTexto( ‘data’ , ‘texto_formato’ )" },
    "GERADATA": { signature: "GeraData( ‘num_dia’ , ‘num_mês’ , ‘num_ano’ )" },
    "HOJE": { signature: "Hoje( )" },
    "MESEXTENSO": { signature: "MesExtenso( ‘data’ )" },
    "REFORMATADATA": { signature: "ReFormataData( ‘data’ , ‘texto_formato_entrada’, ‘texto_formato_saida’ )" },
    "SOMADATA": { signature: "SomaData( ‘texto_unidade’ , ‘numero_somar’ , ‘data’ )" },
    "SUBDATA": { signature: "SubData( ‘texto_unidade’ , ‘numero_subtrair’ , ‘data’ )" },
    "TEMPO": { signature: "Tempo( ‘data’ )" },
    "ZERATEMPO": { signature: "ZeraTempo( ‘data’ )" },
    "ABS": { signature: "Abs( ‘numero’ )" },
    "ARREDONDAR": { signature: "Arredondar( ‘numero’ , ‘num_precisão’ )" },
    "CARACT": { signature: "Caract( ‘numero_cod_ascii’ )" },
    "FORMATANUMERO": { signature: "FormataNumero( ‘numero’ , ‘texto_formato’ )" },
    "MOEDAEXTENSO": { signature: "MoedaExtenso( ‘numero’ )" },
    "RAIZ": { signature: "Raiz( ‘numero’ )" },
    "TEXTO": { signature: "Texto( ‘numero/lógico’ )" },
    "TRUNCAR": { signature: "Truncar( ‘numero’ , ‘num_precisão’ )" },
    "VALOREXTENSO": { signature: "ValorExtenso( ‘numero’ )" },
    "VALIDACPF": { signature: "ValidaCPF( ‘texto’ )" },
    "VALIDACNPJ": { signature: "ValidaCNPJ( ‘texto’ )" },
    "VALIDACNH": { signature: "ValidaCNH( ‘texto’ )" },
    "CODIGO": { signature: "Codigo( ‘texto’ )" },
    "COPIAR": { signature: "Copiar( ‘destino’ , ‘origem’ )" },
    "DIREITA": { signature: "Direita( ‘texto’ , ‘num_caract’ )" },
    "ESQUERDA": { signature: "Esquerda( ‘texto’ , ‘num_caract’ )" },
    "FONETICA": { signature: "Fonetica( ‘texto’ )" },
    "FORMATATEXTO": { signature: "FormataTexto( ‘texto’ , ‘texto_formato’ )" },
    "LOCALIZAR": { signature: "Localizar( ‘texto_princ’ , ‘texto_local’ , ‘num_pos_inicial’ )" },
    "LOCALIZARREV": { signature: "LocalizarRev( ‘texto_princ’ , ‘texto_local’ , ‘num_pos_inicial’ )" },
    "MAIUSCULO": { signature: "Maiusculo( ‘texto’ )" },
    "MEIO": { signature: "Meio( ‘texto’ , ‘num_pos_inicial’ , ‘num_caract’ )" },
    "MINUSCULO": { signature: "Minusculo( ‘texto’ )" },
    "MUDAR": { signature: "Mudar( ‘texto_princ’ , ‘texto_antigo’ , ‘texto_novo’ )" },
    "PRIMAISCULO": { signature: "PriMaiusculo( ‘texto’ )" },
    "REPLICAR": { signature: "Replicar( ‘texto’ , ‘numero_repetições’ )" },
    "REVERSO": { signature: "Reverso( ‘texto’ )" },
    "SEMELHANCANOME": { signature: "SemelhancaNomes( ‘texto1’ , ‘texto2’ )" },
    "SUPRIMIR": { signature: "Suprimir( ‘texto’ , ‘texto_caractere_a_suprimir’ )" },
    "TAMANHO": { signature: "Tamanho( ‘texto’ )" },
    "VALOR": { signature: "Valor( ‘texto’ )" },
};
const ROCKET_FUNCTIONS = Object.keys(FUNCTIONS_METADATA);
const ROCKET_FUNCTIONS_SET = new Set(ROCKET_FUNCTIONS);

const ICONS = {
    success: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    error: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    suggestion: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
};

// --- ELEMENTOS DA UI ---
const formulaInput = document.getElementById('formula');
const resultadoEl = document.getElementById('resultado');
const signatureHelpEl = document.getElementById('signature-help');
const clearBtn = document.getElementById('clearBtn');

// --- LÓGICA DE VALIDAÇÃO PRINCIPAL ---
function debounce(func, timeout = 200) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function renderValidation() {
    const val = formulaInput.value;
    resultadoEl.innerHTML = '';
    if (!val.trim()) return;

    const { isValid, errors, corrections } = parseAndValidate(val);

    // Card de Status
    const statusCard = document.createElement('div');
    statusCard.id = 'status-card';
    statusCard.className = `result-card ${isValid ? 'correto' : 'incorreto'}`;
    statusCard.innerHTML = `<h3>${isValid ? ICONS.success : ICONS.error} Status</h3><p>A fórmula parece ${isValid ? 'válida' : 'inválida'}.</p>`;
    resultadoEl.appendChild(statusCard);

    // Card de Erros
    if (errors.length > 0) {
        const errorsCard = document.createElement('div');
        errorsCard.id = 'errors-card';
        errorsCard.className = 'result-card';
        let errorsHtml = `<h3>${ICONS.error} Erros Encontrados</h3><div class="scroll-box"><ul>`;
        [...new Set(errors.map(e => e.msg))].forEach(msg => { errorsHtml += `<li>${msg}</li>`; });
        errorsHtml += '</ul></div>';
        errorsCard.innerHTML = errorsHtml;
        resultadoEl.appendChild(errorsCard);
    }

    // Card de Correções
    if (corrections.length > 0) {
        const correctionsCard = document.createElement('div');
        correctionsCard.id = 'corrections-card';
        correctionsCard.className = 'result-card';
        let correctionsHtml = `<h3>${ICONS.suggestion} Correções Sugeridas</h3><div class="scroll-box">`;
        corrections.forEach((correction, index) => {
            correctionsHtml += `
                <div class="correction-item" id="correction-${index}">
                    <p>${correction.description}</p>
                    <button class="apply-btn">Aplicar</button>
                </div>`;
        });
        if (corrections.length > 1) {
             correctionsHtml += `<div class="correction-item"><p>Aplicar todas as sugestões</p><button class="apply-btn" id="apply-all-btn">Aplicar Todas</button></div>`;
        }
        correctionsHtml += '</div>';
        correctionsCard.innerHTML = correctionsHtml;
        resultadoEl.appendChild(correctionsCard);

        // Adicionar event listeners para os botões
        corrections.forEach((correction, index) => {
            document.querySelector(`#correction-${index} .apply-btn`).addEventListener('click', () => {
                formulaInput.value = correction.newFormula;
                processChange();
            });
        });
        if (document.getElementById('apply-all-btn')) {
            document.getElementById('apply-all-btn').addEventListener('click', () => {
                let formula = val;
                // Sort corrections by position in reverse order to avoid index shifting issues
                const sortedCorrections = [...corrections].sort((a, b) => (b.pos || 0) - (a.pos || 0));

                sortedCorrections.forEach(corr => {
                    if (corr.apply) {
                        formula = corr.apply(formula);
                    }
                });
                formulaInput.value = formula;
                processChange();
            });
        }
    }
}

function parseAndValidate(formulaStr) {
    const errors = [];
    const corrections = [];
    const trimmedFormula = formulaStr.trim();

    // --- Pre-parsing for context ---
    const stringBoundaryIndices = [];
    for (let i = 0; i < formulaStr.length; i++) {
        if (formulaStr[i] === "'") {
            stringBoundaryIndices.push(i);
        }
    }
    function isInsideString(pos) {
        let boundaryCount = 0;
        for (const boundary of stringBoundaryIndices) {
            if (pos > boundary) {
                boundaryCount++;
            } else {
                break;
            }
        }
        return boundaryCount % 2 !== 0;
    }

    // --- Validation Checks ---

    // Check for '//' or '/*...*/' comments
    if (formulaStr.includes('//') || /\/[^/]*\//.test(formulaStr)) {
        const pos = formulaStr.indexOf('/');
        errors.push({ msg: "Comentários usando '/' não são permitidos.", pos });
    }

    const semicolonPos = formulaStr.length;
    if (!trimmedFormula.endsWith(';')) {
        errors.push({ msg: "A fórmula deve terminar com ';'.", pos: semicolonPos });
        const newFormula = formulaStr + ';';
        corrections.push({ description: "Adicionar ';' no final da fórmula.", newFormula, apply: (f) => f + ';', pos: semicolonPos });
    }

    const commaAfterParenPos = trimmedFormula.lastIndexOf('),') + 1;
    if (trimmedFormula.includes('),')) {
        errors.push({ msg: "Sintaxe inválida: Vírgula encontrada após um parêntese de fechamento.", pos: commaAfterParenPos });
    }

    const trailingCommaPos = trimmedFormula.length - 2;
    if (trimmedFormula.endsWith(',;')) {
        errors.push({ msg: "Sintaxe inválida: Vírgula desnecessária antes do ponto e vírgula final.", pos: trailingCommaPos });
        const newFormula = trimmedFormula.slice(0, -2) + ';';
        corrections.push({
            description: "Remover vírgula final.",
            newFormula,
            apply: (f) => f.trim().slice(0, -2) + ';',
            pos: trailingCommaPos
        });
    }

    // Check for function name followed by space but not a parenthesis
    for (const func of ROCKET_FUNCTIONS) {
        // This regex finds a function name followed by at least one space, and then NOT a '('.
        const funcRegex = new RegExp(`\\b(${func})\\b\\s+([^\\(])`, 'gi');
        let noParenMatch;
        while ((noParenMatch = funcRegex.exec(formulaStr)) !== null) {
            if (isInsideString(noParenMatch.index)) continue;

            const pos = noParenMatch.index;
            const errorMsg = `A função "${func}" deve ser seguida por '('.`;
            if (!errors.some(e => e.pos === pos)) {
                errors.push({ msg: errorMsg, pos });
                const insertPos = noParenMatch.index + func.length;
                corrections.push({
                    description: `Adicionar '(' após a função "${func}".`,
                    newFormula: formulaStr.slice(0, insertPos) + '(' + formulaStr.slice(insertPos),
                    apply: (f) => f.slice(0, insertPos) + '(' + f.slice(insertPos),
                    pos
                });
            }
        }
    }

    // Check for missing comma between a term and a function call
    const missingCommaWithFuncRegex = /(@@[A-Z0-9_.]+|'[^']*'|\))\s+([a-zA-Z_][a-zA-Z0-9_]*)/g;
    let funcMatch;
    while ((funcMatch = missingCommaWithFuncRegex.exec(formulaStr)) !== null) {
        if (isInsideString(funcMatch.index)) continue;

        const firstTerm = funcMatch[1].trim();
        const funcName = funcMatch[2].toUpperCase();

        if (ROCKET_FUNCTIONS_SET.has(funcName)) {
            const pos = funcMatch.index + funcMatch[1].length;
            const errorMsg = `Sintaxe inválida: Falta um separador ',' entre '${firstTerm}' e '${funcName}'.`;
            if (!errors.some(e => e.pos === pos)) {
                errors.push({ msg: errorMsg, pos });
                const newFormula = formulaStr.substring(0, pos) + ',' + formulaStr.substring(pos);
                corrections.push({
                    description: `Adicionar ',' entre '${firstTerm}' e '${funcName}'.`,
                    newFormula,
                    apply: (f) => f.substring(0, pos) + ',' + f.substring(pos),
                    pos
                });
            }
        }
    }
    

    // Original check for missing comma between arguments (e.g. @@VAR @@VAR)
    const regex = /([a-zA-Z0-9_@.)]+)\s+([a-zA-Z0-9_@.]+)/g;
    let match;
    while ((match = regex.exec(formulaStr)) !== null) {
        if (isInsideString(match.index)) continue;

        const firstTerm = match[1];
        const secondTerm = match[2];
        const charBefore = formulaStr[match.index - 1];
        if (charBefore && charBefore.trim() === ',') {
            continue;
        }

        if ( (firstTerm.endsWith(')') || /@@[A-Z0-9_.]+/.test(firstTerm)) && /@@[A-Z0-9_.]+/.test(secondTerm) ) {
            if (ROCKET_FUNCTIONS_SET.has(firstTerm.toUpperCase()) || ROCKET_FUNCTIONS_SET.has(secondTerm.toUpperCase())) {
                continue; 
            }

            const pos = match.index;
            const errorMsg = `Sintaxe inválida: Falta um separador ',' entre '${firstTerm}' e '${secondTerm}'.`;
            if (!errors.some(e => e.pos === pos)) {
                errors.push({ msg: errorMsg, pos });
                const newFormula = formulaStr.substring(0, match.index + firstTerm.length) + ',' + formulaStr.substring(match.index + firstTerm.length);
                corrections.push({
                    description: `Adicionar ',' entre '${firstTerm}' e '${secondTerm}'.`,
                    newFormula,
                    apply: (f) => f.substring(0, match.index + firstTerm.length) + ',' + f.substring(match.index + firstTerm.length),
                    pos
                });
            }
        }
    }


    const parensStack = [];
    let inString = false;
    for (let i = 0; i < formulaStr.length; i++) {
        const char = formulaStr[i];
        const prevChar = formulaStr[i - 1];
        if (char === "'") inString = !inString;
        if (inString) continue;

        if (char === '@' && prevChar !== '@') {
            if (formulaStr.substring(i, i + 2) !== '@@') {
               errors.push({ msg: `Variável inválida. As variáveis devem começar com '@@'.`, pos: i });
                const newFormula = formulaStr.slice(0, i) + '@@' + formulaStr.slice(i + 1);
                   corrections.push({
                       description: `Corrigir para '@@'?`,
                       newFormula,
                       apply: (f) => f.slice(0, i) + '@@' + f.slice(i + 1),
                       pos: i
                   });



            }
        }


        if (char === '(') {
            const lookbehind = formulaStr.substring(0, i);
            const funcMatch = lookbehind.match(/([A-Z.À-Ú]+)\s*$/i);
            if (funcMatch) {
                const funcName = funcMatch[1].toUpperCase();
                if (!ROCKET_FUNCTIONS_SET.has(funcName)) {
                    const closest = findClosestFunction(funcName);
                    if (closest) {
                        const pos = lookbehind.lastIndexOf(funcMatch[1]);
                        errors.push({ msg: `A função "${funcName}" não é reconhecida.`, pos });
                        const newFormula = formulaStr.replace(new RegExp(funcName, 'ig'), closest);
                        corrections.push({
                            description: `Corrigir "${funcName}" para <strong>${closest}</strong>?`,
                            newFormula,
                            apply: (f) => f.replace(new RegExp(funcName, 'ig'), closest),
                            pos
                        });
                    }
                }
            }
            parensStack.push({char: '(', pos: i});
        } else if (char === ')') {
            if (parensStack.length === 0) {
                const pos = i;
                const rest = formulaStr.substring(i + 1);
                if (!/^[\s);]*$/.test(rest)) {
                    errors.push({ msg: `Parêntese de fechamento ')' inesperado.`, pos });
                    const newFormula = formulaStr.slice(0, pos) + formulaStr.slice(pos + 1);
                    corrections.push({
                        description: `Remover ')' inesperado.`,
                        newFormula,
                        apply: (f) => f.slice(0, pos) + f.slice(pos + 1),
                        pos
                    });
                }
            } else {
                parensStack.pop();
            }
        }
    }

    if (parensStack.length > 0) {
        const missing = parensStack.length;
        const pos = formulaStr.length;
        errors.push({ msg: `${missing} parêntese(s) não fechado(s).`, pos });
        const newFormula = formulaStr.slice(0, -1) + ')'.repeat(missing) + ';';
        corrections.push({
            description: `Adicionar ${missing} parêntese(s) de fechamento.`,
            newFormula,
            apply: (f) => f.slice(0, -1) + ')'.repeat(missing) + ';',
            pos
        });
    }

    return { isValid: errors.length === 0, errors, corrections };
}

// ... (O resto do JS: Levenshtein, Autocomplete, Signature Help, Event Listeners) ...
// (A lógica completa está aqui para manter o exemplo funcional)

function levenshtein(s1, s2){s1=s1.toLowerCase();s2=s2.toLowerCase();var costs=new Array();for(var i=0;i<=s1.length;i++){var lastValue=i;for(var j=0;j<=s2.length;j++){if(i==0)costs[j]=j;else{if(j>0){var newValue=costs[j-1];if(s1.charAt(i-1)!=s2.charAt(j-1))newValue=Math.min(Math.min(newValue,lastValue),costs[j])+1;costs[j-1]=lastValue;lastValue=newValue;}}}if(i>0)costs[s2.length]=lastValue;}return costs[s2.length];}
function findClosestFunction(t){let e=Infinity,n=null;for(const o of ROCKET_FUNCTIONS){const r=levenshtein(t,o);r<e&&r<=2&&(e=r,n=o)}return n}
function showSignatureHelp() {
    const val = formulaInput.value;
    const cursorPos = formulaInput.selectionStart;
    let openParens = 0;
    let funcName = '';

    for (let i = cursorPos - 1; i >= 0; i--) {
        if (val[i] === '(') {
            if (openParens === 0) {
                const match = val.substring(0, i).match(/([a-zA-ZÀ-Ú]+)$/);
                if (match) {
                    funcName = match[1].toUpperCase();
                }
                break;
            } else {
                openParens--;
            }
        } else if (val[i] === ')') {
            openParens++;
        }
    }

    if (funcName && FUNCTIONS_METADATA[funcName]) {
        signatureHelpEl.textContent = FUNCTIONS_METADATA[funcName].signature;
        signatureHelpEl.style.display = 'block';
    } else {
        signatureHelpEl.style.display = 'none';
    }
}
let currentFocus;
function showAutocomplete(t){const e=t.toUpperCase().split(/\(|\s|,|'|\+/).pop();if(closeAllLists(),!e||"'"===t.slice(-1))return!1;currentFocus=-1;const n=document.createElement("DIV");n.setAttribute("id","autocomplete-list"),n.setAttribute("class","autocomplete-items"),document.getElementById("formula-container").appendChild(n);const o=ROCKET_FUNCTIONS.filter(n=>n.startsWith(e));if(0===o.length){const r=findClosestFunction(e);if(r){const l=document.createElement("DIV");l.innerHTML=`<span class="did-you-mean">Você quis dizer: </span><strong>${r}</strong>?`,l.addEventListener("click",()=>applySuggestion(r,e)),n.appendChild(l)}}else o.forEach(t=>{const o=document.createElement("DIV");o.innerHTML=`<strong>${t.substr(0,e.length)}</strong>${t.substr(e.length)}`,o.addEventListener("click",()=>applySuggestion(t,e)),n.appendChild(o)});0===n.childElementCount&&closeAllLists()}
function applySuggestion(t,e){const n=formulaInput.value,o=n.toUpperCase().lastIndexOf(e);formulaInput.value=n.substring(0,o)+t,closeAllLists(),formulaInput.focus(),validate()}
function closeAllLists(){const t=document.getElementsByClassName("autocomplete-items");for(let e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e])}
function handleAutocompleteNav(t){let e=document.getElementById("autocomplete-list");if(e&&(e=e.getElementsByTagName("div")),!e||0===e.length)return;if(40==t.keyCode)currentFocus++,addActive(e);else if(38==t.keyCode)currentFocus--,addActive(e);else if(13==t.keyCode||9==t.keyCode){if(currentFocus>-1)t.preventDefault(),e[currentFocus].click()}else 27==t.keyCode&&closeAllLists()}
function addActive(t){if(!t)return!1;removeActive(t),currentFocus>=t.length&&(currentFocus=0),currentFocus<0&&(currentFocus=t.length-1),t[currentFocus].classList.add("autocomplete-active")}
function removeActive(t){for(let e=0;e<t.length;e++)t[e].classList.remove("autocomplete-active")}
const processChange=debounce(()=>validate());formulaInput.addEventListener("input",()=>{processChange(),showAutocomplete(formulaInput.value),showSignatureHelp()}),formulaInput.addEventListener("keydown",handleAutocompleteNav),clearBtn.addEventListener("click",()=>{formulaInput.value="",resultadoEl.innerHTML="",localStorage.removeItem("rocket_formula_v2"),formulaInput.focus()}),window.addEventListener("load",()=>{const t=localStorage.getItem("rocket_formula_v2");t&&(formulaInput.value=t)}),document.addEventListener("click",t=>{t.target!==formulaInput&&closeAllLists()});

function validate() {
    renderValidation();
    localStorage.setItem('rocket_formula_v2', formulaInput.value);
}