// --- ESTRUTURA DE DADOS E CONSTANTES GLOBAIS ---
const FUNCTIONS_METADATA = {
    "SE": { signature: "Se( ‘teste_lógico’ , ‘valor_se_verdadeiro’ , ‘valor_se_falso’ )", returns: 'any' },
    "DIA": { signature: "Dia( ‘data’ )", returns: 'numeric' },
    "MES": { signature: "Mes( ‘data’ )", returns: 'numeric' },
    "ANO": { signature: "Ano( ‘data’ )", returns: 'numeric' },
    "HORA": { signature: "Hora( ‘data’ )", returns: 'numeric' },
    "MINUTO": { signature: "Minuto( ‘data’ )", returns: 'numeric' },
    "SEGUNDO": { signature: "Segundo( ‘data’ )", returns: 'numeric' },
    "AGORA": { signature: "Agora( )", returns: 'date' },
    "DATA": { signature: "Data( ‘data’ )", returns: 'text' },
    "DIASEMANA": { signature: "DiaSemana( ‘data’ )", returns: 'text' },
    "DIFDATA": { signature: "DifData( ‘texto_unidade’ , ‘data01’ , ‘data02’ )", returns: 'numeric' },
    "FORMATADATA": { signature: "FormataData( ‘data’ , ‘texto_formato’ )", returns: 'text' },
    "GERADATACOMTEXTO": { signature: "GeraDataComTexto( ‘data’ , ‘texto_formato’ )", returns: 'date' },
    "GERADATA": { signature: "GeraData( ‘num_dia’ , ‘num_mês’ , ‘num_ano’ )", returns: 'date' },
    "HOJE": { signature: "Hoje( )", returns: 'date' },
    "MESEXTENSO": { signature: "MesExtenso( ‘data’ )", returns: 'text' },
    "REFORMATADATA": { signature: "ReFormataData( ‘data’ , ‘texto_formato_entrada’, ‘texto_formato_saida’ )", returns: 'text' },
    "SOMADATA": { signature: "SomaData( ‘texto_unidade’ , ‘numero_somar’ , ‘data’ )", returns: 'date' },
    "SUBDATA": { signature: "SubData( ‘texto_unidade’ , ‘numero_subtrair’ , ‘data’ )", returns: 'date' },
    "TEMPO": { signature: "Tempo( ‘data’ )", returns: 'text' },
    "ZERATEMPO": { signature: "ZeraTempo( ‘data’ )", returns: 'date' },
    "ABS": { signature: "Abs( ‘numero’ )", returns: 'numeric' },
    "ARREDONDAR": { signature: "Arredondar( ‘numero’ , ‘num_precisão’ )", returns: 'numeric' },
    "CARACT": { signature: "Caract( ‘numero_cod_ascii’ )", returns: 'text' },
    "FORMATANUMERO": { signature: "FormataNumero( ‘numero’ , ‘texto_formato’ )", returns: 'text' },
    "MOEDAEXTENSO": { signature: "MoedaExtenso( ‘numero’ )", returns: 'text' },
    "RAIZ": { signature: "Raiz( ‘numero’ )", returns: 'numeric' },
    "TEXTO": { signature: "Texto( ‘numero/lógico’ )", returns: 'text' },
    "TRUNCAR": { signature: "Truncar( ‘numero’ , ‘num_precisão’ )", returns: 'numeric' },
    "VALOREXTENSO": { signature: "ValorExtenso( ‘numero’ )", returns: 'text' },
    "VALIDACPF": { signature: "ValidaCPF( ‘texto’ )", returns: 'text' },
    "VALIDACNPJ": { signature: "ValidaCNPJ( ‘texto’ )", returns: 'text' },
    "VALIDACNH": { signature: "ValidaCNH( ‘texto’ )", returns: 'text' },
    "CODIGO": { signature: "Codigo( ‘texto’ )", returns: 'numeric' },
    "COPIAR": { signature: "Copiar( ‘destino’ , ‘origem’ )", returns: 'any' },
    "DIREITA": { signature: "Direita( ‘texto’ , ‘num_caract’ )", returns: 'text' },
    "ESQUERDA": { signature: "Esquerda( ‘texto’ , ‘num_caract’ )", returns: 'text' },
    "FONETICA": { signature: "Fonetica( ‘texto’ )", returns: 'text' },
    "FORMATATEXTO": { signature: "FormataTexto( ‘texto’ , ‘texto_formato’ )", returns: 'text' },
    "LOCALIZAR": { signature: "Localizar( ‘texto_princ’ , ‘texto_local’ , ‘num_pos_inicial’ )", returns: 'numeric' },
    "LOCALIZARREV": { signature: "LocalizarRev( ‘texto_princ’ , ‘texto_local’ , ‘num_pos_inicial’ )", returns: 'numeric' },
    "MAIUSCULO": { signature: "Maiusculo( ‘texto’ )", returns: 'text' },
    "MEIO": { signature: "Meio( ‘texto’ , ‘num_pos_inicial’ , ‘num_caract’ )", returns: 'text' },
    "MINUSCULO": { signature: "Minusculo( ‘texto’ )", returns: 'text' },
    "MUDAR": { signature: "Mudar( ‘texto_princ’ , ‘texto_antigo’ , ‘texto_novo’ )", returns: 'text' },
    "PRIMAISCULO": { signature: "PriMaiusculo( ‘texto’ )", returns: 'text' },
    "REPLICAR": { signature: "Replicar( ‘texto’ , ‘numero_repetições’ )", returns: 'text' },
    "REVERSO": { signature: "Reverso( ‘texto’ )", returns: 'text' },
    "SEMELHANCANOME": { signature: "SemelhancaNomes( ‘texto1’ , ‘texto2’ )", returns: 'numeric' },
    "SUPRIMIR": { signature: "Suprimir( ‘texto’ , ‘texto_caractere_a_suprimir’ )", returns: 'text' },
    "TAMANHO": { signature: "Tamanho( ‘texto’ )", returns: 'numeric' },
    "VALOR": { signature: "Valor( ‘texto’ )", returns: 'numeric' },
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
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
const settingsOverlay = document.getElementById('settings-overlay');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const mainContent = document.getElementById('main-content');

// --- GERENCIAMENTO DE ESTADO (HISTÓRICO) ---
let history = [''];
let historyIndex = 0;
const HISTORY_MAX_SIZE = 50;

// --- LÓGICA DE VALIDAÇÃO PRINCIPAL ---
function debounce(func, timeout = 300) {
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

        // Verifica se há correções com a mesma posição, o que indica um conflito que o usuário precisa resolver manualmente.
        const positions = corrections.map(c => c.pos).filter(p => p !== undefined);
        const hasConflicts = new Set(positions).size < positions.length;

        if (corrections.length > 1) {
            if (hasConflicts) {
                correctionsHtml += `<div class="correction-item conflict-notice"><p>Escolha uma das opções para erros com múltiplas sugestões para habilitar o "Aplicar Todas".</p></div>`;
            } else {
                correctionsHtml += `<div class="correction-item"><p>Aplicar todas as sugestões</p><button class="apply-btn" id="apply-all-btn">Aplicar Todas</button></div>`;
            }
        }

        correctionsHtml += '</div>';
        correctionsCard.innerHTML = correctionsHtml;
        resultadoEl.appendChild(correctionsCard);

        // Adicionar event listeners para os botões
        corrections.forEach((correction, index) => {
            document.querySelector(`#correction-${index} .apply-btn`).addEventListener('click', () => {
                updateFormula(correction.newFormula, true);
                processChange();
            });
        });
        // O botão só existirá se não houver conflitos.
        const applyAllBtn = document.getElementById('apply-all-btn');
        if (applyAllBtn) {
            document.getElementById('apply-all-btn').addEventListener('click', () => {
                let formula = val;
                // Sort corrections by position in reverse order to avoid index shifting issues
                const sortedCorrections = [...corrections].sort((a, b) => (b.pos || 0) - (a.pos || 0));

                sortedCorrections.forEach(corr => {
                    if (corr.apply) {
                        formula = corr.apply(formula);
                    }
                });
                updateFormula(formula, true);
                processChange();
            });
        }
    }
}

/**
 * This is a complete rewrite of the validation logic using a stateful tokenizer.
 * It processes the formula string character by character, understanding the context (e.g., inside a string, function, variable).
 * This approach is more robust and avoids the cascading errors and incorrect correction placements of the previous regex-heavy implementation.
 */
function parseAndValidate(formulaStr) {
    const errors = [];
    const corrections = [];
    const trimmedFormula = formulaStr.trim();
    const parensStack = [];
    let stringState = { inString: false, quoteType: null };

    for (let i = 0; i < formulaStr.length; i++) {
        const char = formulaStr[i];
        const prevChar = formulaStr[i - 1];

        // 0. Concatenation validation - Run this early to catch missing operators before misinterpreting strings.
        // This regex finds terms (variables, strings, or function calls ending in ')')
        // that are followed by another term, without a valid operator (&, ,, ;, etc.) between them.
        const concatRegex = /((?:@@[a-zA-Z0-9_.]+|\"[^\"]*\"|\'[^\']*\'|\)))\s+((?:@@[a-zA-Z0-9_.]+|\"[^\"]*\"|\'[^\']*\'))/g;
        let concatMatch;
        while ((concatMatch = concatRegex.exec(formulaStr))) {
            const firstTerm = concatMatch[1].trim();
            const secondTerm = concatMatch[2].trim();
            const pos = concatMatch.index + concatMatch[1].length;
    
            // To avoid false positives, check if we are inside a function's parentheses,
            // where terms are separated by commas, not ampersands.
            let openParensCount = 0;
            for (let k = 0; k < concatMatch.index; k++) {
                if (formulaStr[k] === '(' && !isInsideString(k, formulaStr)) openParensCount++;
                if (formulaStr[k] === ')' && !isInsideString(k, formulaStr)) openParensCount--;
            }
    
            const errorMsg = `Operador ausente entre '${firstTerm}' e '${secondTerm}'.`;
            if (!errors.some(e => e.pos === pos)) {
                errors.push({ msg: errorMsg, pos });
    
                // Helper to create correction objects
                const createCorrection = (operator) => {
                    const insertAt = formulaStr.indexOf(firstTerm, concatMatch.index) + firstTerm.length;
                    const newFormula = formulaStr.slice(0, insertAt) + ` ${operator} ` + formulaStr.slice(insertAt).trimStart();
                    return {
                        description: `Adicionar <code>${operator}</code> entre <code>${firstTerm}</code> e <code>${secondTerm}</code>.`,
                        newFormula: newFormula,
                        // The 'apply' function receives the formula string 'f' as an argument when it's executed.
                        apply: (f) => f.slice(0, f.indexOf(firstTerm, concatMatch.index) + firstTerm.length) + ` ${operator} ` + f.slice(f.indexOf(firstTerm, concatMatch.index) + firstTerm.length).trimStart(),
                        pos
                    };
                };

                const commaCorrection = createCorrection(',');
                const ampersandCorrection = createCorrection('&');

                // If inside a function call, the comma is the more likely intended operator.
                if (openParensCount > 0) {
                    corrections.push(commaCorrection);
                    corrections.push(ampersandCorrection);
                } else {
                    // Otherwise, ampersand is more likely.
                    corrections.push(ampersandCorrection);
                    corrections.push(commaCorrection);
                }
            }
        }
        // 0. Variable validation (`@` vs `@@`) - HIGHEST PRIORITY
        if (char === '@' && prevChar !== '@' && formulaStr.substring(i, i + 2) !== '@@') {
            // Only trigger if not inside a string
            if (!stringState.inString) {
                errors.push({ msg: `Variável inválida. As variáveis devem começar com '@@'.`, pos: i });
                const newFormula = formulaStr.slice(0, i) + '@@' + formulaStr.slice(i + 1);
                if (!corrections.some(c => c.pos === i)) {
                    corrections.push({
                    description: `Corrigir <code>${formulaStr.substring(i, i + 1)}</code> para <code>@@</code>?`,
                    newFormula,
                    apply: (f) => f.slice(0, i) + '@@' + f.slice(i + 1),
                    pos: i
                    });
                }
            }
        }
         // 1. String validation
         if (!stringState.inString) {
            if ((char === '"' || char === "'") && prevChar !== '\\') {
                // Check for invalid preceding characters to catch missing opening quotes like in `= 1"`.
                const lookbehind = formulaStr.substring(0, i).trimEnd();
                const lastCharOfLookbehind = lookbehind.slice(-1);
                const validPrecedingChars = new Set(['=', ',', '(', '&', ';', '']); // '' for start of formula
                // If the last char is a quote, it means a term just ended, and we are likely missing an operator, not an opening quote.
                if (!validPrecedingChars.has(lastCharOfLookbehind) && lastCharOfLookbehind !== '"' && lastCharOfLookbehind !== "'") {
                    const errorMsg = `Aspas de abertura ausentes ou caractere inválido antes da string.`;
                    const correctionDesc = `Envolver <code>${lookbehind.substring(lookbehind.lastIndexOf(' ') + 1)}</code> com aspas?`;
                    errors.push({ msg: errorMsg, pos: i });

                    // Find the start of the term that should be quoted.
                    const lastSpaceIndex = lookbehind.lastIndexOf(' ');
                    const termToQuote = lookbehind.substring(lastSpaceIndex + 1);
                    const beforeTerm = lookbehind.substring(0, lastSpaceIndex + 1);

                    const newFormula = beforeTerm + `"${termToQuote}"` + formulaStr.slice(i + 1);

                    corrections.push({
                        description: correctionDesc,
                        newFormula,
                        apply: (f) => beforeTerm + `"${termToQuote}"` + f.slice(i + 1),
                        pos: lastSpaceIndex + 1
                    });
                    continue; // Continue to find other errors, but this part is handled.
                }

                stringState = { inString: true, quoteType: char, start: i };
            }
        } else { // We are inside a string
            if (char === stringState.quoteType && prevChar !== '\\') {
                stringState = { inString: false, quoteType: null, start: -1 };
            } else if (char === ',' || char === ')') {
                // Found a separator inside an unclosed string - this is the primary error we're fixing.
                const stringContent = formulaStr.substring(stringState.start + 1, i).trimEnd();
                const finalQuotePos = stringState.start + 1 + stringContent.length;
                const quoteChar = stringState.quoteType;

                const errorMsg = `String não terminada: '${stringContent}' não foi fechada.`;
                const correctionDesc = `Adicionar aspas de fechamento <code>${quoteChar}</code> em <code>${stringContent}</code>.`;
                errors.push({ msg: errorMsg, pos: finalQuotePos });

                const newFormula = formulaStr.slice(0, finalQuotePos) + quoteChar + formulaStr.slice(finalQuotePos);
                corrections.push({
                    description: correctionDesc,
                    newFormula,
                    apply: (f) => f.slice(0, finalQuotePos) + quoteChar + f.slice(finalQuotePos),
                    pos: finalQuotePos
                });
                // Skip the rest of the loop for this iteration as we found a critical error here.
                continue;
            }
        }

        // Skip other checks if inside a string
        if (stringState.inString) continue;

        // 2. Parentheses validation
        if (char === '(') {
            parensStack.push({ char: '(', pos: i });
        } else if (char === ')') {
            if (parensStack.length === 0) {
                errors.push({ msg: `Parêntese de fechamento ')' inesperado ou em excesso.`, pos: i });
                const newFormula = formulaStr.slice(0, i) + formulaStr.slice(i + 1);
                corrections.push({
                    description: `Remover parêntese de fechamento <code>)</code> excedente.`,
                    newFormula,
                    apply: (f) => f.slice(0, i) + f.slice(i + 1),
                    pos: i
                });
            } else {
                parensStack.pop();
            }
        }

        // 3. Function name validation (simple version)
        if (char === '(') {
            const lookbehind = formulaStr.substring(0, i).trimEnd();
            const funcMatch = lookbehind.match(/([a-zA-Z_]+)$/);
            if (funcMatch) {
                const funcName = funcMatch[1].toUpperCase();
                if (!ROCKET_FUNCTIONS_SET.has(funcName)) {
                    const closest = findClosestFunction(funcName);
                    if (closest) {
                        const pos = lookbehind.lastIndexOf(funcMatch[1]);
                        errors.push({ msg: `A função "${funcName}" não é reconhecida.`, pos });
                        const regex = new RegExp(`\\b${funcName}\\b`, 'i');
                        const newFormula = formulaStr.replace(regex, closest);
                        corrections.push({
                            description: `Corrigir <code>${funcName}</code> para <code>${closest}</code>?`,
                            newFormula,
                            apply: (f) => f.replace(regex, closest),
                            pos
                        });
                    }
                }
            }
        }
    }

    // 5. Check for function names not followed by a parenthesis
    for (const func of ROCKET_FUNCTIONS) {
        // This regex finds a function name (as a whole word)
        // followed by zero or more spaces, and then NOT a '('.
        // The negative lookahead `(?!\()` is key.
        const funcRegex = new RegExp(`\\b(${func})\\b\\s*(?!\\()`, 'gi');
        let noParenMatch;
        while ((noParenMatch = funcRegex.exec(formulaStr)) !== null) {
            const pos = noParenMatch.index;
            
            // Simple check to avoid flagging inside another word or string
            if (pos > 0 && formulaStr[pos-1].match(/[a-zA-Z0-9_"]/)) continue;

            const errorMsg = `A função "${func}" deve ser seguida por '('.`;
            if (!errors.some(e => e.pos === pos)) {
                errors.push({ msg: errorMsg, pos });
                const insertPos = noParenMatch.index + func.length;
                corrections.push({
                    description: `Adicionar <code>(</code> após a função <code>${func}</code>.`,
                    newFormula: formulaStr.slice(0, insertPos) + '(' + formulaStr.slice(insertPos),
                    apply: (f) => f.slice(0, insertPos) + '(' + f.slice(insertPos),
                    pos
                });
            }
        }
    }

    // Final checks after the loop
    if (stringState.inString) {
        errors.push({ msg: "String não terminada. Verifique se todas as aspas foram fechadas corretamente.", pos: formulaStr.length });
    }

    if (parensStack.length > 0) {
        const missing = parensStack.length;
        const pos = formulaStr.length;
        errors.push({ msg: `${missing} parêntese(s) não fechado(s).`, pos });
        const newFormula = formulaStr.slice(0, -1) + ')'.repeat(missing) + ';';
        corrections.push({
            description: `Adicionar <code>${')'.repeat(missing)}</code> para fechar a expressão.`,
            newFormula,
            apply: (f) => f.slice(0, -1) + ')'.repeat(missing) + ';',
            pos
        });
    }

    if (!trimmedFormula.endsWith(';')) {
        const pos = formulaStr.length;
        errors.push({ msg: "A fórmula deve terminar com ';'.", pos });
        corrections.push({ description: "Adicionar <code>;</code> no final da fórmula.", newFormula: formulaStr + ';', apply: (f) => f + ';', pos });
    }

    return { isValid: errors.length === 0, errors, corrections };
}

function isInsideString(pos, text) {
    let inString = false;
    let quoteType = null;
    for (let i = 0; i < pos; i++) {
        if ((text[i] === '"' || text[i] === "'") && (i === 0 || text[i-1] !== '\\')) {
            if (!inString) {
                inString = true;
                quoteType = text[i];
            } else if (quoteType === text[i]) {
                inString = false;
                quoteType = null;
            }
        }
    }
    return inString;
}

// --- LÓGICA DE HISTÓRICO (UNDO/REDO) ---
function pushToHistory(value) {
    // Se estamos no meio do histórico, apaga o futuro
    if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1);
    }

    // Evita adicionar estados duplicados consecutivos
    if (history[history.length - 1] === value) {
        return;
    }

    history.push(value);

    // Limita o tamanho do histórico
    if (history.length > HISTORY_MAX_SIZE) {
        history.shift();
    }

    historyIndex = history.length - 1;
    updateHistoryButtons();
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        updateFormula(history[historyIndex], false); // false para não adicionar ao histórico
        updateHistoryButtons();
    }
}

function redo() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        updateFormula(history[historyIndex], false); // false para não adicionar ao histórico
        updateHistoryButtons();
    }
}

function updateHistoryButtons() {
    undoBtn.disabled = historyIndex <= 0;
    redoBtn.disabled = historyIndex >= history.length - 1;
}

function updateFormula(value, addToHistory) {
    formulaInput.value = value;
    if (addToHistory) {
        pushToHistory(value);
    }
    validate(); // Revalida a fórmula após a alteração
}

// --- LÓGICA DE CONFIGURAÇÕES ---
function toggleSettingsPanel(show) {
    if (show) {
        settingsPanel.classList.remove('settings-panel-hidden');
        settingsOverlay.classList.remove('settings-panel-hidden');
        setTimeout(() => {
            settingsPanel.classList.add('settings-panel-visible');
            settingsOverlay.classList.add('settings-panel-visible');
        }, 10);
    } else {
        settingsPanel.classList.remove('settings-panel-visible');
        settingsOverlay.classList.remove('settings-panel-visible');
        setTimeout(() => {
            settingsPanel.classList.add('settings-panel-hidden');
            settingsOverlay.classList.add('settings-panel-hidden');
        }, 300);
    }
}

function applyTheme(themeName) {
    document.body.className = themeName;
    localStorage.setItem('rocket_theme', themeName);
}

function applyLayout(isSingleColumn) {
    if (isSingleColumn) {
        mainContent.classList.add('single-column');
    } else {
        mainContent.classList.remove('single-column');
    }
    localStorage.setItem('rocket_force_single_column', isSingleColumn);
}

function loadSettings() {
    const savedTheme = localStorage.getItem('rocket_theme') || 'theme-dark';
    const forceSingleColumn = localStorage.getItem('rocket_force_single_column') === 'true';

    applyTheme(savedTheme);
    applyLayout(forceSingleColumn);

    // Atualiza os controles no painel de configurações
    document.querySelector(`input[name="theme"][value="${savedTheme}"]`).checked = true;
    document.getElementById('force-single-column').checked = forceSingleColumn;
}


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
function showAutocomplete(t){const e=t.toUpperCase().split(/\(|\s|,|'|"|&|\+|-|\*|\//).pop();if(closeAllLists(),!e||"'"===t.slice(-1)||"\""===t.slice(-1))return!1;currentFocus=-1;const n=document.createElement("DIV");n.setAttribute("id","autocomplete-list"),n.setAttribute("class","autocomplete-items"),document.getElementById("formula-container").appendChild(n);const o=ROCKET_FUNCTIONS.filter(n=>n.startsWith(e));if(0===o.length){const r=findClosestFunction(e);if(r){const l=document.createElement("DIV");l.innerHTML=`<span class="did-you-mean">Você quis dizer: </span><strong>${r}</strong>?`,l.addEventListener("click",()=>applySuggestion(r,e)),n.appendChild(l)}}else o.forEach(t=>{const o=document.createElement("DIV");o.innerHTML=`<strong>${t.substr(0,e.length)}</strong>${t.substr(e.length)}`,o.addEventListener("click",()=>applySuggestion(t,e)),n.appendChild(o)});0===n.childElementCount&&closeAllLists()}
function applySuggestion(t,e){const n=formulaInput.value,o=n.toUpperCase().lastIndexOf(e);formulaInput.value=n.substring(0,o)+t,closeAllLists(),formulaInput.focus(),validate()}
function closeAllLists(){const t=document.getElementsByClassName("autocomplete-items");for(let e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e])}
function handleAutocompleteNav(t){let e=document.getElementById("autocomplete-list");if(e&&(e=e.getElementsByTagName("div")),!e||0===e.length)return;if(40==t.keyCode)currentFocus++,addActive(e);else if(38==t.keyCode)currentFocus--,addActive(e);else if(13==t.keyCode||9==t.keyCode){if(currentFocus>-1)t.preventDefault(),e[currentFocus].click()}else 27==t.keyCode&&closeAllLists()}
function addActive(t){if(!t)return!1;removeActive(t),currentFocus>=t.length&&(currentFocus=0),currentFocus<0&&(currentFocus=t.length-1),t[currentFocus].classList.add("autocomplete-active")}
function removeActive(t){for(let e=0;e<t.length;e++)t[e].classList.remove("autocomplete-active")}
const processChange=debounce(()=>validate());formulaInput.addEventListener("input",()=>{processChange(),showAutocomplete(formulaInput.value),showSignatureHelp()}),formulaInput.addEventListener("keydown",handleAutocompleteNav),clearBtn.addEventListener("click",()=>{formulaInput.value="",resultadoEl.innerHTML="",localStorage.removeItem("rocket_formula_v2"),formulaInput.focus()}),window.addEventListener("load",()=>{const t=localStorage.getItem("rocket_formula_v2");t&&(formulaInput.value=t)}),document.addEventListener("click",t=>{t.target!==formulaInput&&closeAllLists()});
const debouncedPushHistory = debounce(value => pushToHistory(value), 1000);

formulaInput.addEventListener("input", () => {
    processChange();
    showAutocomplete(formulaInput.value);
    showSignatureHelp();
    debouncedPushHistory(formulaInput.value);
});

clearBtn.addEventListener("click", () => {
    updateFormula('', true);
    resultadoEl.innerHTML = "";
    localStorage.removeItem("rocket_formula_v2");
    formulaInput.focus();
});

undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);

settingsBtn.addEventListener('click', () => toggleSettingsPanel(true));
closeSettingsBtn.addEventListener('click', () => toggleSettingsPanel(false));
settingsOverlay.addEventListener('click', () => toggleSettingsPanel(false));

document.querySelectorAll('input[name="theme"]').forEach(radio => {
    radio.addEventListener('change', (e) => applyTheme(e.target.value));
});

document.getElementById('force-single-column').addEventListener('change', (e) => {
    applyLayout(e.target.checked);
});

function validate() {
    renderValidation();
    localStorage.setItem('rocket_formula_v2', formulaInput.value);
}

window.addEventListener("load", () => {
    loadSettings();
    const savedFormula = localStorage.getItem("rocket_formula_v2");
    if (savedFormula) {
        updateFormula(savedFormula, true);
    } else {
        updateHistoryButtons();
    }
    validate();
});