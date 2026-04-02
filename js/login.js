// js/login.js
async function entrar() {
    const userField = document.getElementById('user');
    const passField = document.getElementById('pass');

    if (!userField || !passField) return;

    const user = userField.value.toUpperCase();
    const pass = passField.value;

    // Usando o supabaseClient que definimos no config.js
    const { data, error } = await supabaseClient
        .from('USUARIOS') 
        .select('*')
        .eq('nome', user)
        .eq('senha', pass)
        .single();

    if (error || !data) {
        alert("Acesso Negado: Usuário ou Senha incorretos!");
    } else {
        localStorage.setItem('usuario_logado', data.nome);
        localStorage.setItem('nivel_acesso', data.nivel);
        
        alert("Bem-vindo(a), " + data.nome);
        // Após o login, ele vai tentar ir para a pasta pages
        window.location.href = "pages/dashboard.html"; 
    }
}
