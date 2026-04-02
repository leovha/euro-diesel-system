// js/config.js
const _SB_URL = "https://nqpdhwdkpqjcmvxgaypm.supabase.co";
const _SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcGRod2RrcHFqY212eGdheXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzc4MTQsImV4cCI6MjA5MDcxMzgxNH0.oV-G2iGKOEzPUw0jGK9BL14_kx30UqjJ0wXu8xloZdw";

// Mudamos o nome para 'db' para ser curto e não dar conflito
const db = supabase.createClient(_SB_URL, _SB_KEY);

function verificarSessao() {
    const usuarioLogado = localStorage.getItem('usuario_logado');
    if (!usuarioLogado && !window.location.href.includes('index.html')) {
        window.location.href = '../index.html';
    }
}
