// ===================================================================
// API DO ETHUS SCRIPT HUB
// Backend em Node.js + Express (MESMO DOMÍNIO QUE O FRONTEND)
// ===================================================================

const express = require('express');
const path = require('path');
const app = express();

// Middleware para parse de JSON
app.use(express.json());

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// ===================================================================
// BANCO DE DADOS - SCRIPTS DO ETHUS
// ===================================================================

const scriptsDatabase = [
   // ============== BROOKHAVEN RP ==============
   {
      id: 1,
      name: "Rael Hub",
      game: "Brookhaven RP",
      gameId: "brookhaven-rp",
      gameIcon: "https://tr.rbxcdn.com/180DAY-bcfd839bc82c88533cc29bf2989537f9/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/52d639",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 2,
      name: "Cartola Hub",
      game: "Brookhaven RP",
      gameId: "brookhaven-rp",
      gameIcon: "https://tr.rbxcdn.com/180DAY-bcfd839bc82c88533cc29bf2989537f9/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/73864a",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 3,
      name: "Sander XY Hub",
      game: "Brookhaven RP",
      gameId: "brookhaven-rp",
      gameIcon: "https://tr.rbxcdn.com/180DAY-bcfd839bc82c88533cc29bf2989537f9/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/89faf2",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 4,
      name: "Coquette Hub",
      game: "Brookhaven RP",
      gameId: "brookhaven-rp",
      gameIcon: "https://tr.rbxcdn.com/180DAY-bcfd839bc82c88533cc29bf2989537f9/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/973e07",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },

   // ============== JUJUTSU SHENANIGANS ==============
   {
      id: 5,
      name: "Nexor Hub",
      game: "Jujutsu Shenanigans",
      gameId: "jujutsu-shenanigans",
      gameIcon: "https://tr.rbxcdn.com/180DAY-1caf54cff5f60cca72f8295bdd9725c3/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/jujutsu",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 6,
      name: "Plutonium Hub",
      game: "Jujutsu Shenanigans",
      gameId: "jujutsu-shenanigans",
      gameIcon: "https://tr.rbxcdn.com/180DAY-1caf54cff5f60cca72f8295bdd9725c3/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/869ee5",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 7,
      name: "NS Hub",
      game: "Jujutsu Shenanigans",
      gameId: "jujutsu-shenanigans",
      gameIcon: "https://tr.rbxcdn.com/180DAY-1caf54cff5f60cca72f8295bdd9725c3/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/b925f1",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 8,
      name: "Beecon Hub",
      game: "Jujutsu Shenanigans",
      gameId: "jujutsu-shenanigans",
      gameIcon: "https://tr.rbxcdn.com/180DAY-1caf54cff5f60cca72f8295bdd9725c3/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/91b4e2",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },

   // ============== KING LEGACY ==============
   {
      id: 9,
      name: "Tsuo Hub",
      game: "King Legacy",
      gameId: "king-legacy",
      gameIcon: "https://tr.rbxcdn.com/180DAY-66b1b7fd4e25511445d6f7bb207b931d/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/294a82",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 10,
      name: "Arc Hub",
      game: "King Legacy",
      gameId: "king-legacy",
      gameIcon: "https://tr.rbxcdn.com/180DAY-66b1b7fd4e25511445d6f7bb207b931d/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/97699c",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 11,
      name: "Fazium Hub",
      game: "King Legacy",
      gameId: "king-legacy",
      gameIcon: "https://tr.rbxcdn.com/180DAY-66b1b7fd4e25511445d6f7bb207b931d/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/5e854d",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },

   // ============== PRISON LIFE ==============
   {
      id: 12,
      name: "Mythixz Hub",
      game: "Prison Life",
      gameId: "prison-life",
      gameIcon: "https://tr.rbxcdn.com/180DAY-7a3802473e1293b01a362d351dec3acf/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/a6cb02",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 13,
      name: "Selenium Hub",
      game: "Prison Life",
      gameId: "prison-life",
      gameIcon: "https://tr.rbxcdn.com/180DAY-7a3802473e1293b01a362d351dec3acf/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/b3e306",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   },
   {
      id: 14,
      name: "Hookduel Hub",
      game: "Prison Life",
      gameId: "prison-life",
      gameIcon: "https://tr.rbxcdn.com/180DAY-7a3802473e1293b01a362d351dec3acf/150/150/Image/Webp/noFilter",
      url: "https://mineurl.com/bf2338",
      downloads: 0,
      clicks: 0,
      lastUpdate: "2025-02-03"
   }
];

// Analytics database
let analyticsDatabase = [];

// ===================================================================
// ROTAS DA API
// ===================================================================

// ============== HOME / STATUS ==============
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api', (req, res) => {
   res.json({
      status: 'online',
      message: 'Ethus Scripts API',
      version: '1.0.0',
      totalScripts: scriptsDatabase.length,
      totalGames: [...new Set(scriptsDatabase.map(s => s.gameId))].length
   });
});

// ============== LISTAR TODOS OS SCRIPTS ==============
app.get('/api/scripts', (req, res) => {
   try {
      res.json({
         success: true,
         total: scriptsDatabase.length,
         data: scriptsDatabase
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: 'Erro ao buscar scripts',
         message: error.message
      });
   }
});

// ============== BUSCAR SCRIPT POR ID ==============
app.get('/api/scripts/:id', (req, res) => {
   try {
      const scriptId = parseInt(req.params.id);
      const script = scriptsDatabase.find(s => s.id === scriptId);

      if (!script) {
         return res.status(404).json({
            success: false,
            error: 'Script não encontrado'
         });
      }

      res.json({
         success: true,
         data: script
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: 'Erro ao buscar script',
         message: error.message
      });
   }
});

// ============== BUSCAR SCRIPTS POR JOGO ==============
app.get('/api/scripts/game/:gameId', (req, res) => {
   try {
      const gameId = req.params.gameId;
      const scripts = scriptsDatabase.filter(s => s.gameId === gameId);

      if (scripts.length === 0) {
         return res.status(404).json({
            success: false,
            error: 'Nenhum script encontrado para este jogo'
         });
      }

      res.json({
         success: true,
         total: scripts.length,
         data: scripts
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: 'Erro ao buscar scripts do jogo',
         message: error.message
      });
   }
});

// ============== LISTAR JOGOS DISPONÍVEIS ==============
app.get('/api/games', (req, res) => {
   try {
      const games = [...new Set(scriptsDatabase.map(s => ({
         name: s.game,
         id: s.gameId,
         icon: s.gameIcon,
         scriptCount: scriptsDatabase.filter(script => script.gameId === s.gameId).length
      })))];

      const uniqueGames = Array.from(
         new Map(games.map(g => [g.id, g])).values()
      );

      res.json({
         success: true,
         total: uniqueGames.length,
         data: uniqueGames
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: 'Erro ao buscar jogos',
         message: error.message
      });
   }
});

// ============== REGISTRAR ANALYTICS ==============
app.post('/api/analytics', (req, res) => {
   try {
      const { event, scriptName, scriptId, timestamp } = req.body;

      if (!event || !scriptName) {
         return res.status(400).json({
            success: false,
            error: 'Dados incompletos'
         });
      }

      const analyticsEntry = {
         id: analyticsDatabase.length + 1,
         event,
         scriptName,
         scriptId: scriptId || null,
         timestamp: timestamp || new Date().toISOString(),
         ip: req.ip,
         userAgent: req.headers['user-agent']
      };

      analyticsDatabase.push(analyticsEntry);

      // Atualiza contador de cliques
      if (scriptId) {
         const script = scriptsDatabase.find(s => s.id === scriptId);
         if (script) {
            script.clicks = (script.clicks || 0) + 1;
         }
      }

      res.json({
         success: true,
         message: 'Evento registrado',
         data: analyticsEntry
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: 'Erro ao registrar analytics',
         message: error.message
      });
   }
});

// ============== ESTATÍSTICAS ==============
app.get('/api/stats', (req, res) => {
   try {
      const totalScripts = scriptsDatabase.length;
      const totalGames = [...new Set(scriptsDatabase.map(s => s.gameId))].length;
      const totalClicks = scriptsDatabase.reduce((sum, s) => sum + (s.clicks || 0), 0);
      const totalEvents = analyticsDatabase.length;

      const topScripts = [...scriptsDatabase]
         .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
         .slice(0, 5)
         .map(s => ({
            name: s.name,
            game: s.game,
            clicks: s.clicks || 0
         }));

      const recentEvents = analyticsDatabase
         .slice(-10)
         .reverse();

      res.json({
         success: true,
         data: {
            overview: {
               totalScripts,
               totalGames,
               totalClicks,
               totalEvents
            },
            topScripts,
            recentEvents
         }
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: 'Erro ao buscar estatísticas',
         message: error.message
      });
   }
});

// ============== BUSCAR/PESQUISAR ==============
app.get('/api/search', (req, res) => {
   try {
      const query = req.query.q?.toLowerCase() || '';

      if (!query) {
         return res.status(400).json({
            success: false,
            error: 'Parâmetro de busca (q) é obrigatório'
         });
      }

      const results = scriptsDatabase.filter(script =>
         script.name.toLowerCase().includes(query) ||
         script.game.toLowerCase().includes(query) ||
         script.gameId.toLowerCase().includes(query)
      );

      res.json({
         success: true,
         query,
         total: results.length,
         data: results
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: 'Erro ao buscar scripts',
         message: error.message
      });
   }
});

// ===================================================================
// ERRO 404
// ===================================================================
app.use((req, res) => {
   res.status(404).json({
      success: false,
      error: 'Endpoint não encontrado'
   });
});

// ===================================================================
// INICIALIZAÇÃO
// ===================================================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`
   ╔═══════════════════════════════════════════╗
   ║    🚀 ETHUS SCRIPTS - API ONLINE         ║
   ╠═══════════════════════════════════════════╣
   ║  Porta: ${PORT}                            ║
   ║  Scripts: ${scriptsDatabase.length}                           ║
   ║  Jogos: 4                                 ║
   ║  URL: http://localhost:${PORT}             ║
   ╚═══════════════════════════════════════════╝
   `);
});

module.exports = app;
