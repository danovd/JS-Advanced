function edit (element, match, replacer){
    const text = element.textContent;
    
    /// За заменяне на първо съвпадение:
    /// const result = text.replace(match, replacer);
    
    // 1-ви начин за заменяне на всички съвпадения, с regex
    let pattern = new RegExp(match, 'g');
    const result = text.replace(pattern, replacer);  
    
    // 2-ри начин split-replace
    // const result = text.split(match).join(replacer);
    element.textContent = result;
}