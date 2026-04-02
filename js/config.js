// js/config.js
const _SB_URL = "https://nqpdhwdkpqjcmvxgaypm.supabase.co";
const _SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcGRod2RrcHFqY212eGdheXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzc4MTQsImV4cCI6MjA5MDcxMzgxNH0.oV-G2iGKOEzPUw0jGK9BL14_kx30UqjJ0wXu8xloZdw";

const supabase = supabase.createClient(_SB_URL, _SB_KEY);

// Esta função será usada em todas as páginas para garantir que
// só quem logou possa ver o conteúdo.
function verificarSessao() {
    const usuarioLogado = localStorage.getItem('usuario_logado');
    if (!usuarioLogado && !window.location.href.includes('index.html')) {
        window.location.href = '../index.html';
    }
}
async function entrar() {
    const user = document.getElementById('user').value.toUpperCase();
    const pass = document.getElementById('pass').value;

    // Busca na tabela MAIÚSCULA que já tem a ZANE cadastrada
    const { data, error } = await supabase
        .from('USUARIOS') 
        .select('*')
        .eq('nome', user)
        .eq('senha', pass)
        .single();

    if (error || !data) {
        alert("Acesso Negado: Usuário ou Senha incorretos!");
    } else {
        // Salva que o usuário está logado e o nível dele
        localStorage.setItem('usuario_logado', data.nome);
        localStorage.setItem('nivel_acesso', data.nivel);
        
        alert("Bem-vindo(a), " + data.nome);
        window.location.href = "pages/dashboard.html"; 
    }
}
