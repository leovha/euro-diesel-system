// js/login.js
async function entrar() {
    const user = document.getElementById('user').value.toUpperCase();
    const pass = document.getElementById('pass').value;

    // Usando 'db' e a tabela MAIÚSCULA
    const { data, error } = await db
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
        window.location.href = "pages/dashboard.html"; 
    }
}
