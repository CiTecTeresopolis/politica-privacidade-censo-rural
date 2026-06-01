// src/app.ts

const TODAY = new Date().toLocaleDateString('pt-BR', {
  day: '2-digit', month: 'long', year: 'numeric'
});

const header = `
<header class="site-header">
  <div class="header-inner">
    <a class="header-brand" href="#">
      <div class="header-escudo">🌿</div>
      <div class="header-title">
        Censo Rural Teresópolis
        <span>Prefeitura Municipal — RJ</span>
      </div>
    </a>
    <nav class="header-nav">
      <button class="nav-tab" data-tab="privacidade">Política de Privacidade</button>
      <button class="nav-tab" data-tab="exclusao">Exclusão de Dados</button>
    </nav>
  </div>
  <div class="mobile-tabs">
    <button class="mobile-tab" data-tab="privacidade">🔒 Privacidade</button>
    <button class="mobile-tab" data-tab="exclusao">🗑️ Exclusão</button>
  </div>
</header>`;

const hero = (title: string, _subtitle: string, tag: string) => `
<div class="hero">
  <div class="hero-inner">
    <div class="hero-tag">${tag}</div>
    <h1>${title}</h1>
    <div class="hero-meta">
      <span>Versão 1.0</span>
      <span>Vigência: <span data-last-updated>${TODAY}</span></span>
      <span>LGPD — Lei nº 13.709/2018</span>
    </div>
  </div>
</div>`;

// ── PÁGINA 1 — POLÍTICA DE PRIVACIDADE ────────────────────────────────────────
const privacidadePage = `
<div class="page" data-page="privacidade">

  ${hero(
    'Política de <em>Privacidade</em>',
    'Como coletamos, usamos e protegemos seus dados no Censo Rural',
    '🔒 Privacidade & Dados Pessoais'
  )}

  <main class="main-content">

    <nav class="toc">
      <div class="toc-title">Índice desta política</div>
      <ul class="toc-list">
        <li><a href="#p1">Quem somos</a></li>
        <li><a href="#p2">Dados coletados</a></li>
        <li><a href="#p3">Finalidade do tratamento</a></li>
        <li><a href="#p4">Base legal (LGPD)</a></li>
        <li><a href="#p5">Armazenamento e sync</a></li>
        <li><a href="#p6">Compartilhamento</a></li>
        <li><a href="#p7">Retenção dos dados</a></li>
        <li><a href="#p8">Segurança</a></li>
        <li><a href="#p9">Seus direitos</a></li>
        <li><a href="#p10">Contato & DPO</a></li>
      </ul>
    </nav>

    <!-- 1 -->
    <div class="policy-section" id="p1">
      <div class="section-header">
        <div class="section-num">1</div>
        <h2>Identificação do Controlador</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>O <strong>Município de Teresópolis</strong>, por meio da Secretaria Municipal de Agricultura e Desenvolvimento Rural, é o <strong>Controlador</strong> dos dados pessoais tratados pelo aplicativo <strong>Censo Rural Teresópolis</strong>, nos termos do art. 5º, VI da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
        <table class="data-table">
          <thead><tr><th>Campo</th><th>Informação</th></tr></thead>
          <tbody>
            <tr><td>Razão Social</td><td>Prefeitura Municipal de Teresópolis</td></tr>
            <tr><td>CNPJ</td><td>29.138.158/0001-03</td></tr>
            <tr><td>Endereço</td><td>Av. Feliciano Sodré, 675 — Centro, Teresópolis/RJ — CEP 25950-200</td></tr>
            <tr><td>Aplicativo</td><td>Censo Rural Teresópolis (Android)</td></tr>
            <tr><td>Package</td><td>br.gov.teresopolis.censorural</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 2 -->
    <div class="policy-section" id="p2">
      <div class="section-header">
        <div class="section-num">2</div>
        <h2>Dados Pessoais Coletados</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>O aplicativo coleta dados em duas categorias: dados do <strong>produtor rural</strong> (titular do censo) e dados do <strong>recenseador</strong> (servidor municipal).</p>

        <table class="data-table">
          <thead><tr><th>Categoria</th><th>Dado</th><th>Obrigatório</th></tr></thead>
          <tbody>
            <tr><td><strong>Identificação</strong></td><td>Nome completo, CPF</td><td>Sim</td></tr>
            <tr><td><strong>Localização</strong></td><td>Comunidade/localidade, coordenadas GPS (lat/lon)</td><td>Opcional</td></tr>
            <tr><td><strong>Socioeconômico</strong></td><td>Idade, escolaridade, composição familiar, nº de membros</td><td>Sim</td></tr>
            <tr><td><strong>Produção</strong></td><td>Culturas, área cultivada (ha), uso de defensivos, irrigação, assistência técnica</td><td>Sim</td></tr>
            <tr><td><strong>Financeiro</strong></td><td>Renda mensal estimada, nº de empregados, acesso a crédito rural, programas sociais</td><td>Sim</td></tr>
            <tr><td><strong>Recenseador</strong></td><td>UID Firebase, nome, e-mail institucional</td><td>Sim</td></tr>
            <tr><td><strong>Dispositivo</strong></td><td>Model ID do aparelho, versão do app</td><td>Automático</td></tr>
          </tbody>
        </table>

        <div class="info-box amarelo">
          <span class="icon">⚠️</span>
          <span>O CPF é coletado exclusivamente para identificação única do produtor no cadastro municipal. Não é utilizado para fins comerciais, de crédito ou compartilhamento com terceiros.</span>
        </div>
      </div>
    </div>

    <!-- 3 -->
    <div class="policy-section" id="p3">
      <div class="section-header">
        <div class="section-num">3</div>
        <h2>Finalidade do Tratamento</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>Os dados coletados são utilizados <strong>exclusivamente</strong> para as seguintes finalidades de interesse público:</p>
        <ul>
          <li>Elaboração do <strong>Censo Rural Municipal</strong> para diagnóstico socioeconômico do campo</li>
          <li>Planejamento de <strong>políticas públicas agrícolas</strong> (PRONAF, assistência técnica, seguro rural)</li>
          <li>Identificação de produtores elegíveis a <strong>programas sociais</strong> e de fomento</li>
          <li>Geração de <strong>estatísticas agregadas</strong> para relatórios municipais e estaduais</li>
          <li>Cumprimento de obrigações legais perante órgãos federais (IBGE, MDA, MAPA)</li>
        </ul>
        <div class="info-box verde">
          <span class="icon">✅</span>
          <span>Os dados <strong>nunca</strong> serão utilizados para fins comerciais, de marketing, pontuação de crédito ou vendidos a terceiros.</span>
        </div>
      </div>
    </div>

    <!-- 4 -->
    <div class="policy-section" id="p4">
      <div class="section-header">
        <div class="section-num">4</div>
        <h2>Base Legal (LGPD)</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>O tratamento de dados se fundamenta nas seguintes bases legais previstas no art. 7º e art. 11 da LGPD:</p>
        <table class="data-table">
          <thead><tr><th>Base Legal</th><th>Dispositivo</th><th>Aplicação</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Execução de políticas públicas</strong></td>
              <td>Art. 7º, III</td>
              <td>Realização do Censo Rural por órgão público municipal</td>
            </tr>
            <tr>
              <td><strong>Obrigação legal ou regulatória</strong></td>
              <td>Art. 7º, II</td>
              <td>Prestação de informações a órgãos federais (IBGE, MAPA)</td>
            </tr>
            <tr>
              <td><strong>Consentimento</strong></td>
              <td>Art. 7º, I</td>
              <td>Coleta de dados de localização GPS (opcional, solicitado em campo)</td>
            </tr>
            <tr>
              <td><strong>Legítimo interesse público</strong></td>
              <td>Art. 7º, IX</td>
              <td>Estatísticas e diagnósticos agregados de desenvolvimento rural</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 5 -->
    <div class="policy-section" id="p5">
      <div class="section-header">
        <div class="section-num">5</div>
        <h2>Armazenamento e Sincronização</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>O aplicativo opera em modelo <strong>Offline-First</strong>: os dados são gravados primeiro no dispositivo do recenseador e sincronizados com o servidor quando há conexão à internet.</p>
        <table class="data-table">
          <thead><tr><th>Camada</th><th>Tecnologia</th><th>Localização</th></tr></thead>
          <tbody>
            <tr><td><strong>Banco local</strong></td><td>RealmDB (SQLite-based)</td><td>Dispositivo Android do recenseador</td></tr>
            <tr><td><strong>Nuvem</strong></td><td>MongoDB Atlas (Device Sync)</td><td>Região SA_EAST_1 — São Paulo/BR</td></tr>
            <tr><td><strong>Autenticação</strong></td><td>Firebase Auth</td><td>Google Cloud — região us-central</td></tr>
          </tbody>
        </table>
        <div class="info-box verde">
          <span class="icon">🇧🇷</span>
          <span>O banco de dados principal está hospedado na <strong>região SA_EAST_1 (São Paulo)</strong>, garantindo que os dados permaneçam em território nacional conforme recomendação do art. 33 da LGPD.</span>
        </div>
        <p>Os dados no dispositivo são isolados por recenseador: cada servidor acessa apenas os registros por ele coletados. O acesso administrativo é restrito à equipe da Secretaria de Agricultura.</p>
      </div>
    </div>

    <!-- 6 -->
    <div class="policy-section" id="p6">
      <div class="section-header">
        <div class="section-num">6</div>
        <h2>Compartilhamento de Dados</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>Os dados poderão ser compartilhados <strong>somente</strong> nas seguintes situações:</p>
        <ul>
          <li><strong>Órgãos públicos federais</strong> (IBGE, MDA, MAPA) — para fins estatísticos e de políticas públicas, sempre em formato <em>anonimizado ou agregado</em></li>
          <li><strong>Secretarias municipais</strong> (Assistência Social, Planejamento) — para elegibilidade a programas sociais, mediante autorização expressa</li>
          <li><strong>Poder Judiciário e Ministério Público</strong> — em cumprimento de ordem judicial</li>
        </ul>
        <div class="info-box vermelho">
          <span class="icon">🚫</span>
          <span>É vedado o compartilhamento com <strong>empresas privadas, agrotóxicos, seguradoras ou bancos</strong> sem consentimento expresso e específico do titular, conforme art. 7º, I da LGPD.</span>
        </div>
      </div>
    </div>

    <!-- 7 -->
    <div class="policy-section" id="p7">
      <div class="section-header">
        <div class="section-num">7</div>
        <h2>Período de Retenção</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <table class="data-table">
          <thead><tr><th>Dado</th><th>Retenção</th><th>Fundamento</th></tr></thead>
          <tbody>
            <tr><td>Registros do Censo Rural</td><td>10 anos</td><td>Lei de Arquivos Municipais / TAC</td></tr>
            <tr><td>Dados de autenticação (recenseador)</td><td>Duração do vínculo + 2 anos</td><td>Gestão de acesso</td></tr>
            <tr><td>Logs de sincronização</td><td>90 dias</td><td>Auditoria técnica</td></tr>
            <tr><td>Localização GPS</td><td>10 anos (junto ao censo)</td><td>Geoprocessamento rural</td></tr>
          </tbody>
        </table>
        <p>Após o período de retenção, os dados são anonimizados ou eliminados de forma segura, com registro no Relatório de Impacto à Proteção de Dados (RIPD) da Prefeitura.</p>
      </div>
    </div>

    <!-- 8 -->
    <div class="policy-section" id="p8">
      <div class="section-header">
        <div class="section-num">8</div>
        <h2>Medidas de Segurança</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <ul>
          <li><strong>Autenticação</strong>: login com e-mail institucional via Firebase Auth — sem senhas fracas, suporte a 2FA</li>
          <li><strong>Isolamento</strong>: cada recenseador acessa apenas seus próprios registros (Realm Flexible Sync com filtro por <code>recenseadorId</code>)</li>
          <li><strong>Criptografia em trânsito</strong>: toda comunicação app ↔ Atlas usa TLS 1.3</li>
          <li><strong>Criptografia em repouso</strong>: banco Atlas com encryption at rest habilitado</li>
          <li><strong>Sem dados sensíveis no dispositivo além do necessário</strong>: o Realm local não persiste tokens de autenticação</li>
          <li><strong>Auditoria</strong>: todos os writes no Atlas são logados com timestamp e ID do recenseador</li>
        </ul>
      </div>
    </div>

    <!-- 9 -->
    <div class="policy-section" id="p9">
      <div class="section-header">
        <div class="section-num">9</div>
        <h2>Direitos do Titular (LGPD art. 18)</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>O produtor rural cujos dados foram coletados tem os seguintes direitos garantidos:</p>
        <ul>
          <li><strong>Confirmação e acesso</strong> — saber se seus dados são tratados e receber cópia</li>
          <li><strong>Correção</strong> — solicitar correção de dados incompletos ou incorretos</li>
          <li><strong>Anonimização ou eliminação</strong> — quando desnecessários ou tratados em desconformidade</li>
          <li><strong>Portabilidade</strong> — receber os dados em formato estruturado</li>
          <li><strong>Revogação do consentimento</strong> — especificamente para dados de GPS coletados com consentimento</li>
          <li><strong>Informação sobre compartilhamento</strong> — saber com quem seus dados foram compartilhados</li>
          <li><strong>Petição à ANPD</strong> — reclamação perante a Autoridade Nacional de Proteção de Dados</li>
        </ul>
        <div class="info-box verde">
          <span class="icon">📋</span>
          <span>Para exercer qualquer direito, consulte a seção <strong>"Contato & DPO"</strong> abaixo. O prazo de resposta é de até <strong>15 dias úteis</strong>.</span>
        </div>
      </div>
    </div>

    <!-- 10 -->
    <div class="policy-section" id="p10">
      <div class="section-header">
        <div class="section-num">10</div>
        <h2>Contato & Encarregado (DPO)</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato com o Encarregado de Proteção de Dados (DPO) da Prefeitura de Teresópolis:</p>
      </div>
    </div>

    <div class="contact-card">
      <h3>📬 Fale com o DPO</h3>
      <p>Encarregado de Proteção de Dados — Prefeitura de Teresópolis</p>
      <div class="contact-links">
        <a class="contact-link" href="mailto:dpo@teresopolis.rj.gov.br">✉️ dpo@teresopolis.rj.gov.br</a>
        <a class="contact-link" href="tel:+552127418000">📞 (21) 2741-8000</a>
        <a class="contact-link" href="#">🌐 teresopolis.rj.gov.br</a>
      </div>
    </div>

  </main>
</div>`;

// ── PÁGINA 2 — POLÍTICA DE EXCLUSÃO DE DADOS ──────────────────────────────────
const exclusaoPage = `
<div class="page" data-page="exclusao">

  ${hero(
    'Política de <em>Exclusão</em> de Dados',
    'Como solicitar a remoção dos seus dados do Censo Rural',
    '🗑️ Direito ao Apagamento — LGPD art. 18'
  )}

  <main class="main-content">

    <div class="info-box verde" style="margin-bottom:2rem; background:var(--branco); border-radius:10px; padding:1.25rem 1.5rem; border:1px solid var(--cinza-medio); border-left: 4px solid var(--verde-escuro);">
      <span class="icon">⚖️</span>
      <span>Esta política regulamenta o exercício do <strong>direito ao apagamento</strong> previsto no art. 18, IV da LGPD (Lei nº 13.709/2018). A Prefeitura se compromete a processar solicitações de exclusão em até <strong>15 dias úteis</strong>.</span>
    </div>

    <!-- Quem pode solicitar -->
    <div class="policy-section">
      <div class="section-header">
        <div class="section-num">1</div>
        <h2>Quem Pode Solicitar a Exclusão</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>Podem solicitar a exclusão total ou parcial dos dados:</p>
        <ul>
          <li><strong>O produtor rural titular dos dados</strong> — mediante apresentação de documento de identidade</li>
          <li><strong>Representante legal</strong> — com procuração ou documentação de representação</li>
          <li><strong>Recenseador (servidor municipal)</strong> — para exclusão da sua conta e dados de autenticação, mediante solicitação ao setor de TI</li>
        </ul>
        <div class="info-box amarelo">
          <span class="icon">⚠️</span>
          <span>A exclusão de dados do titular (produtor rural) <strong>não apaga automaticamente</strong> os registros históricos exigidos por lei para fins de auditoria pública, conforme art. 16, I da LGPD.</span>
        </div>
      </div>
    </div>

    <!-- Como solicitar -->
    <div class="policy-section">
      <div class="section-header">
        <div class="section-num">2</div>
        <h2>Como Solicitar — Passo a Passo</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <div class="step-content">
              <h4>Preparar a documentação</h4>
              <p>Tenha em mãos: cópia do <strong>RG ou CPF</strong> do titular, e se possível o <strong>número do protocolo</strong> da coleta ou a data aproximada em que o censo foi realizado na sua propriedade.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div class="step-content">
              <h4>Enviar a solicitação por e-mail</h4>
              <p>Envie para <code>dpo@teresopolis.rj.gov.br</code> com assunto <code>[EXCLUSÃO LGPD] Censo Rural</code>, informando nome completo, CPF e o dado que deseja excluir ou o pedido de exclusão integral.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div class="step-content">
              <h4>Ou presencialmente na Secretaria</h4>
              <p>Compareça à <strong>Secretaria Municipal de Agricultura</strong> — Av. Feliciano Sodré, 675, Centro, Teresópolis/RJ. Horário: seg–sex, 8h–17h. Solicite o <em>Formulário de Exercício de Direitos LGPD</em>.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">4</div>
            <div class="step-content">
              <h4>Receber confirmação</h4>
              <p>Em até <strong>5 dias úteis</strong> você receberá confirmação de recebimento com número de protocolo. A resposta final ocorre em até <strong>15 dias úteis</strong>.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">5</div>
            <div class="step-content">
              <h4>Confirmação de exclusão</h4>
              <p>Após a exclusão, você receberá um <strong>comprovante por escrito</strong> informando quais dados foram removidos de cada sistema (Realm local, MongoDB Atlas, Firebase Auth).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- O que será excluído -->
    <div class="policy-section">
      <div class="section-header">
        <div class="section-num">3</div>
        <h2>O Que Será Excluído</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <table class="data-table">
          <thead><tr><th>Sistema</th><th>Dado</th><th>Prazo de Exclusão</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>MongoDB Atlas</strong></td>
              <td>Registro completo do CensoRural (todos os campos)</td>
              <td>7 dias úteis</td>
            </tr>
            <tr>
              <td><strong>Firebase Auth</strong></td>
              <td>Conta do recenseador (e-mail, UID)</td>
              <td>3 dias úteis</td>
            </tr>
            <tr>
              <td><strong>Dispositivo do recenseador</strong></td>
              <td>Cópia local no RealmDB</td>
              <td>Na próxima sincronização (automático)</td>
            </tr>
            <tr>
              <td><strong>Backups</strong></td>
              <td>Expurgado no próximo ciclo de backup</td>
              <td>Até 30 dias</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Exceções -->
    <div class="policy-section">
      <div class="section-header">
        <div class="section-num">4</div>
        <h2>Casos em que a Exclusão Pode Ser Negada</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>Conforme o art. 16 da LGPD, a exclusão pode ser negada total ou parcialmente quando os dados forem necessários para:</p>
        <ul>
          <li>Cumprimento de <strong>obrigação legal ou regulatória</strong> do controlador</li>
          <li><strong>Transferência a terceiro</strong> já realizada, respeitadas as normas de tratamento</li>
          <li>Uso exclusivo do controlador, desde que <strong>anonimizados</strong></li>
          <li><strong>Pesquisa científica, histórica ou estatística</strong> de interesse público, quando impossível identificar o titular nos dados agregados</li>
          <li>Exercício regular de <strong>direito em processo judicial ou administrativo</strong></li>
        </ul>
        <div class="info-box amarelo">
          <span class="icon">📌</span>
          <span>Nesses casos, a Prefeitura informará por escrito a justificativa legal para a negativa, e o titular poderá <strong>recorrer à ANPD</strong> (Autoridade Nacional de Proteção de Dados) em caso de discordância.</span>
        </div>
      </div>
    </div>

    <!-- Exclusão de conta do recenseador -->
    <div class="policy-section">
      <div class="section-header">
        <div class="section-num">5</div>
        <h2>Exclusão de Conta do Recenseador</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>Servidores municipais que utilizaram o aplicativo como recenseadores podem solicitar a exclusão de sua conta de acesso:</p>
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <div class="step-content">
              <h4>Solicitar ao setor de TI</h4>
              <p>Envie e-mail para <code>ti@teresopolis.rj.gov.br</code> informando seu e-mail institucional e solicitando o encerramento da conta do Censo Rural.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div class="step-content">
              <h4>Desativação imediata do acesso</h4>
              <p>O acesso ao aplicativo é bloqueado em até <strong>24 horas</strong>. Os registros de censo coletados pelo servidor são mantidos (são dados do produtor, não do recenseador).</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div class="step-content">
              <h4>Exclusão da conta Firebase</h4>
              <p>O UID e e-mail são removidos do Firebase Auth em até <strong>3 dias úteis</strong> após confirmação do desligamento ou transferência do servidor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contato -->
    <div class="policy-section">
      <div class="section-header">
        <div class="section-num">6</div>
        <h2>Recurso à ANPD</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">
        <p>Caso a solicitação de exclusão seja negada ou não seja atendida no prazo, o titular tem o direito de peticionar diretamente à <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>:</p>
        <ul>
          <li>Site: <strong>gov.br/anpd</strong></li>
          <li>Peticionamento eletrônico via <strong>Gov.br</strong></li>
          <li>Ouvidoria: <strong>0800 978 9000</strong></li>
        </ul>
      </div>
    </div>

    <div class="contact-card">
      <h3>📬 Solicitar Exclusão de Dados</h3>
      <p>Entre em contato pelo canal de sua preferência para iniciar o processo de exclusão.</p>
      <div class="contact-links">
        <a class="contact-link" href="mailto:dpo@teresopolis.rj.gov.br?subject=[EXCLUSÃO LGPD] Censo Rural">✉️ dpo@teresopolis.rj.gov.br</a>
        <a class="contact-link" href="tel:+552127418000">📞 (21) 2741-8000</a>
        <a class="contact-link" href="#">📍 Sec. de Agricultura — Centro</a>
      </div>
    </div>

  </main>
</div>`;

const footer = `
<footer class="site-footer">
  <p>
    <strong>Prefeitura Municipal de Teresópolis</strong> — CNPJ 29.138.158/0001-03<br>
    Censo Rural Teresópolis · Versão 1.0 · Vigência: <span data-last-updated></span><br>
    Conforme a Lei Geral de Proteção de Dados — Lei nº 13.709/2018
  </p>
</footer>`;

export function renderApp(): string {
  return header + privacidadePage + exclusaoPage + footer;
}
