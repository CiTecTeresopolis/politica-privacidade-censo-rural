import './style.css';

// ─── Content ──────────────────────────────────────────────────────────────────

const PRIVACY_SECTIONS = [
  {
    id: 'controlador',
    title: 'Controlador dos Dados',
    content: `
      <p>O controlador dos dados pessoais coletados pelo aplicativo <strong>Censo Rural Teresópolis</strong> é a <strong>Prefeitura Municipal de Teresópolis</strong></p>
      <p>O Encarregado pelo Tratamento de Dados Pessoais (DPO) pode ser contactado pelo e-mail indicado ao final desta política.</p>
      <div class="info-box verde"><span class="icon">🏛️</span><p>Este aplicativo é de uso exclusivo de servidores municipais e dos recenciadores devidamente selecionados em parceria com a Universidade Estácio de Sá - Unidade Teresópolis.</p></div>
    `,
  },
  {
    id: 'dados',
    title: 'Dados Coletados',
    content: `
      <p>O aplicativo coleta os seguintes dados para fins exclusivos de recenseamento rural municipal:</p>
      <table class="data-table">
        <thead><tr><th>Categoria</th><th>Dados</th><th>Base Legal (LGPD)</th></tr></thead>
        <tbody>
          <tr><td><strong>Identificação</strong></td><td>Nome completo, CPF do proprietário rural</td><td>Art. 7º, III — execução de políticas públicas</td></tr>
          <tr><td><strong>Localização</strong></td><td>Coordenadas GPS, localidade, bairro rural</td><td>Art. 7º, III — execução de políticas públicas</td></tr>
          <tr><td><strong>Socioeconômico</strong></td><td>Idade, escolaridade, composição familiar</td><td>Art. 7º, III — execução de políticas públicas</td></tr>
          <tr><td><strong>Produção</strong></td><td>Culturas, área cultivada (ha), uso de defensivos, irrigação</td><td>Art. 7º, III — execução de políticas públicas</td></tr>
          <tr><td><strong>Financeiro</strong></td><td>Renda mensal estimada, número de empregados, acesso a crédito</td><td>Art. 7º, III — execução de políticas públicas</td></tr>
          <tr><td><strong>Recenseador</strong></td><td>ID e nome do servidor municipal responsável pelo registro</td><td>Art. 7º, II — cumprimento de obrigação legal</td></tr>
          <tr><td><strong>Dispositivo</strong></td><td>Model ID do dispositivo, versão do aplicativo</td><td>Art. 7º, II — segurança e rastreabilidade</td></tr>
        </tbody>
      </table>
      <div class="info-box amarelo"><span class="icon">⚠️</span><p>O CPF é coletado exclusivamente para identificação unívoca do proprietário rural no banco municipal. Não é utilizado para cruzamento com bases de dados externas.</p></div>
    `,
  },
  {
    id: 'finalidade',
    title: 'Finalidade do Tratamento',
    content: `
      <p>Os dados coletados têm finalidade <strong>exclusivamente pública e estatística</strong>, sendo utilizados para:</p>
      <ul>
        <li>Elaboração do diagnóstico socioeconômico rural do município de Teresópolis;</li>
        <li>Planejamento de políticas públicas agrícolas e de assistência técnica;</li>
        <li>Acesso e encaminhamento de produtores a programas governamentais (PRONAF, PAA, Bolsa Família rural);</li>
        <li>Produção de estatísticas municipais para órgãos estaduais e federais (IBGE, SEAPEC-RJ);</li>
        <li>Controle interno de qualidade e rastreabilidade dos registros de censo.</li>
      </ul>
      <p>Os dados <strong>não serão utilizados</strong> para fins comerciais, publicidade, perfilamento individual ou vendidos a terceiros sob qualquer hipótese.</p>
    `,
  },
  {
    id: 'armazenamento',
    title: 'Armazenamento e Infraestrutura',
    content: `
      <p>O aplicativo adota arquitetura <strong>Offline-First</strong>: os dados são gravados imediatamente no banco local do dispositivo (RealmDB) e sincronizados com o servidor em nuvem assim que o dispositivo detecta conexão à internet.</p>
      <h3>Infraestrutura de armazenamento</h3>
      <table class="data-table">
        <thead><tr><th>Camada</th><th>Tecnologia</th><th>Localização</th></tr></thead>
        <tbody>
          <tr><td>Banco local (dispositivo)</td><td>RealmDB (SQLite-based)</td><td>Dispositivo do recenseador</td></tr>
          <tr><td>Banco em nuvem</td><td>MongoDB Atlas Device Sync</td><td>Região SA_EAST_1 — São Paulo/BR</td></tr>
          <tr><td>Autenticação</td><td>Firebase Authentication</td><td>Servidores Google (Brasil/EUA)</td></tr>
        </tbody>
      </table>
      <div class="info-box verde"><span class="icon">🔒</span><p>A sincronização entre dispositivo e nuvem é criptografada em trânsito (TLS 1.3). Os dados em repouso no Atlas são criptografados com AES-256.</p></div>
      <p>O banco em nuvem é isolado por recenseador: cada servidor acessa <strong>apenas os registros por ele coletados</strong>. Supervisores da Secretaria de Agricultura têm acesso de leitura ao conjunto total, sem permissão de edição.</p>
    `,
  },
  {
    id: 'retencao',
    title: 'Retenção dos Dados',
    content: `
      <p>Os dados do censo rural são retidos de acordo com os seguintes critérios:</p>
      <ul>
        <li><strong>Dados de censo:</strong> retidos por no mínimo <strong>10 anos</strong>, conforme a Tabela de Temporalidade de Documentos da Administração Pública Municipal (Resolução CONARQ nº 14/2001);</li>
        <li><strong>Dados de autenticação (Firebase):</strong> retidos enquanto a conta do recenseador estiver ativa no sistema;</li>
        <li><strong>Dados de dispositivo:</strong> sobrescritos a cada atualização do aplicativo;</li>
        <li><strong>Logs de sincronização:</strong> retidos por 90 dias para fins de auditoria técnica.</li>
      </ul>
      <div class="info-box amarelo"><span class="icon">📁</span><p>Após o período de retenção, os dados são anonimizados ou eliminados definitivamente, conforme determinação da Comissão de Avaliação de Documentos e Acesso (CADA) do município.</p></div>
    `,
  },
  {
    id: 'direitos',
    title: 'Direitos dos Titulares (LGPD)',
    content: `
      <p>Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), o titular dos dados tem direito a:</p>
      <ul>
        <li><strong>Confirmação e acesso:</strong> saber se seus dados são tratados e obter cópia;</li>
        <li><strong>Correção:</strong> solicitar a retificação de dados incompletos, inexatos ou desatualizados;</li>
        <li><strong>Anonimização ou eliminação:</strong> solicitar a anonimização ou exclusão dos dados desnecessários ou tratados em desconformidade;</li>
        <li><strong>Portabilidade:</strong> obter os dados em formato estruturado para transferência a outro controlador;</li>
        <li><strong>Informação:</strong> ser informado sobre entidades públicas com as quais o Município compartilhou os dados;</li>
        <li><strong>Revogação:</strong> revogar o consentimento a qualquer tempo (quando aplicável);</li>
        <li><strong>Petição:</strong> peticionar à Autoridade Nacional de Proteção de Dados (ANPD).</li>
      </ul>
      <div class="info-box verde"><span class="icon">✅</span><p>Para exercer seus direitos, o titular deve comparecer pessoalmente à Secretaria de Agricultura e Meio Ambiente ou enviar solicitação por escrito com cópia de documento de identificação.</p></div>
    `,
  },
  {
    id: 'compartilhamento',
    title: 'Compartilhamento de Dados',
    content: `
      <p>Os dados coletados poderão ser compartilhados <strong>exclusivamente com os seguintes destinatários</strong>, para finalidades compatíveis com o recenseamento rural:</p>
      <ul>
        <li><strong>IBGE</strong> — Instituto Brasileiro de Geografia e Estatística (estatísticas agropecuárias);</li>
        <li><strong>SEAPEC-RJ</strong> — Secretaria de Estado de Agricultura do Rio de Janeiro;</li>
        <li><strong>EMATER-RIO</strong> — Empresa de Assistência Técnica e Extensão Rural (assistência ao produtor);</li>
        <li><strong>Ministério da Agricultura</strong> — para fins de políticas públicas federais.</li>
      </ul>
      <p>O compartilhamento é realizado de forma <strong>agregada e anonimizada</strong> sempre que tecnicamente viável. Dados individuais identificáveis somente são compartilhados mediante <strong>solicitação formal</strong> e acordo de uso específico.</p>
      <div class="info-box vermelho"><span class="icon">🚫</span><p>É expressamente vedado o compartilhamento com empresas privadas, instituições financeiras, seguradoras ou qualquer entidade com finalidade comercial.</p></div>
    `,
  },
  {
    id: 'seguranca',
    title: 'Segurança da Informação',
    content: `
      <p>A Prefeitura adota medidas técnicas e organizacionais proporcionais ao risco, incluindo:</p>
      <ul>
        <li>Autenticação de dois fatores obrigatória para recenseadores via Firebase Auth;</li>
        <li>Controle de acesso baseado em perfil (recenseador vs. supervisor);</li>
        <li>Criptografia em trânsito (TLS 1.3) e em repouso (AES-256) no Atlas;</li>
        <li>Sincronização isolada por usuário via Flexible Sync com filtro <code>recenseadorId</code>;</li>
        <li>Logs de auditoria de todas as operações de escrita e leitura;</li>
        <li>Política de senhas fortes e bloqueio após tentativas inválidas;</li>
        <li>Dispositivos registrados e rastreados por <code>deviceId</code>.</li>
      </ul>
      <p>Em caso de incidente de segurança, a Prefeitura notificará a ANPD e os titulares afetados no prazo de <strong>72 horas</strong>, conforme art. 48 da LGPD.</p>
    `,
  },
  {
    id: 'atualizacoes',
    title: 'Atualizações desta Política',
    content: `
      <p>Esta política pode ser atualizada a qualquer tempo pela Prefeitura de Teresópolis. Alterações relevantes serão comunicadas:</p>
      <ul>
        <li>Via notificação no próprio aplicativo Censo Rural;</li>
        <li>Publicação no Portal de Transparência do Município;</li>
        <li>Comunicado à equipe de recenseadores pelo canal oficial da Secretaria.</li>
      </ul>
      <p>A versão mais recente estará sempre disponível nesta página. Recomendamos a consulta periódica.</p>
      <p><strong>Versão atual:</strong> 1.0 &nbsp;|&nbsp; <strong>Vigência:</strong> a partir de 1º de janeiro de 2025.</p>
    `,
  },
];

const DELETION_SECTIONS = [
  {
    id: 'solicitacao',
    title: 'Como Solicitar a Exclusão',
    content: `
      <p>O titular dos dados — ou seu representante legal — pode solicitar a exclusão de seus dados do sistema Censo Rural Teresópolis pelos canais abaixo. A solicitação deve ser acompanhada de documento de identificação válido.</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Identificação do titular</h4>
            <p>Apresente cópia do RG ou CPF do proprietário rural cujos dados deseja excluir. Em caso de representação legal, inclua procuração ou termo de tutela.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>Envio da solicitação</h4>
            <p>Protocole pessoalmente na <strong>Secretaria de Agricultura e Meio Ambiente</strong> (Av. Feliciano Sodré, 675 — Alto) ou envie por e-mail para <code>privacidade@teresopolis.rj.gov.br</code> com assunto <code>[LGPD] Exclusão de Dados — Censo Rural</code>.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>Análise e resposta</h4>
            <p>A Prefeitura tem até <strong>15 dias úteis</strong> para analisar a solicitação e comunicar o resultado ao requerente, conforme art. 18 da LGPD.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>Execução da exclusão</h4>
            <p>Deferida a solicitação, os dados são excluídos do banco local dos dispositivos (RealmDB) e do MongoDB Atlas em até <strong>30 dias corridos</strong>, com emissão de comprovante ao requerente.</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'escopo',
    title: 'Escopo da Exclusão',
    content: `
      <p>A exclusão pode ser solicitada de forma <strong>total</strong> (todos os registros do titular) ou <strong>parcial</strong> (campos específicos). A Prefeitura se compromete a excluir:</p>
      <ul>
        <li>Todos os registros de Censo Rural vinculados ao CPF do titular;</li>
        <li>Dados de localização (GPS) associados à propriedade;</li>
        <li>Composição familiar e dados socioeconômicos individualizados;</li>
        <li>Dados financeiros (renda, empregados) do titular.</li>
      </ul>
      <h3>Dados que não podem ser excluídos imediatamente</h3>
      <p>Alguns dados estão sujeitos a <strong>obrigações legais de retenção</strong> e não podem ser excluídos enquanto vigentes:</p>
      <table class="data-table">
        <thead><tr><th>Dado</th><th>Motivo da retenção</th><th>Prazo mínimo</th></tr></thead>
        <tbody>
          <tr><td>Registros de censo com fins estatísticos</td><td>Tabela de Temporalidade CONARQ / LGPD art. 16, I</td><td>10 anos</td></tr>
          <tr><td>Logs de auditoria de acesso</td><td>Segurança e responsabilização — LGPD art. 46</td><td>90 dias</td></tr>
          <tr><td>Dados vinculados a processos administrativos em curso</td><td>Contraditório e ampla defesa</td><td>Até encerramento</td></tr>
        </tbody>
      </table>
      <div class="info-box amarelo"><span class="icon">📋</span><p>Quando a exclusão não for possível imediatamente por obrigação legal, os dados serão <strong>anonimizados</strong>: o CPF e o nome são substituídos por identificadores aleatórios, preservando apenas os dados agregados necessários para fins estatísticos.</p></div>
    `,
  },
  {
    id: 'prazos',
    title: 'Prazos e Confirmação',
    content: `
      <p>Após o protocolo da solicitação, os seguintes prazos se aplicam:</p>
      <table class="data-table">
        <thead><tr><th>Etapa</th><th>Prazo</th></tr></thead>
        <tbody>
          <tr><td>Confirmação de recebimento da solicitação</td><td>1 dia útil</td></tr>
          <tr><td>Análise e decisão (deferimento ou indeferimento)</td><td>15 dias úteis</td></tr>
          <tr><td>Execução da exclusão (após deferimento)</td><td>30 dias corridos</td></tr>
          <tr><td>Emissão de comprovante de exclusão</td><td>5 dias úteis após conclusão</td></tr>
          <tr><td>Propagação para backups e sistemas secundários</td><td>Até 90 dias</td></tr>
        </tbody>
      </table>
      <div class="info-box verde"><span class="icon">✉️</span><p>O requerente receberá por e-mail (ou carta, se preferir) um comprovante numerado atestando a exclusão dos dados, indicando data e escopo da operação.</p></div>
    `,
  },
  {
    id: 'indeferimento',
    title: 'Indeferimento e Recurso',
    content: `
      <p>A solicitação pode ser <strong>indeferida</strong> nas seguintes hipóteses previstas pela LGPD (art. 16):</p>
      <ul>
        <li>Cumprimento de obrigação legal ou regulatória pelo controlador;</li>
        <li>Uso exclusivo do controlador com anonimização;</li>
        <li>Proteção do crédito (dados financeiros em disputa administrativa);</li>
        <li>Exercício regular de direitos em processo judicial ou administrativo em curso.</li>
      </ul>
      <p>Em caso de indeferimento, a Prefeitura comunicará o motivo por escrito no prazo de 15 dias úteis.</p>
      <h3>Recurso</h3>
      <p>O titular que não concordar com a decisão poderá:</p>
      <ul>
        <li>Interpor recurso administrativo ao DPO da Prefeitura no prazo de 10 dias úteis;</li>
        <li>Registrar reclamação diretamente na <strong>ANPD</strong> pelo portal <a href="https://www.gov.br/anpd" target="_blank" rel="noopener">gov.br/anpd</a>;</li>
        <li>Buscar tutela judicial nos termos do art. 22 da LGPD.</li>
      </ul>
    `,
  },
  {
    id: 'responsavel',
    title: 'Responsável pelo Tratamento',
    content: `
      <p>A gestão das solicitações de exclusão é de responsabilidade do <strong>Encarregado de Proteção de Dados (DPO)</strong> da Prefeitura de Teresópolis, designado por portaria da Secretaria Municipal de Administração.</p>
      <div class="contact-card">
        <h3>Entre em contato</h3>
        <p>Para solicitações de exclusão, dúvidas sobre seus direitos ou exercício de qualquer prerrogativa prevista na LGPD:</p>
        <div class="contact-links">
          <a href="mailto:privacidade@teresopolis.rj.gov.br" class="contact-link">📧 privacidade@teresopolis.rj.gov.br</a>
          <a href="https://www.teresopolis.rj.gov.br" target="_blank" rel="noopener" class="contact-link">🌐 teresopolis.rj.gov.br</a>
          <a class="contact-link" href="#">📞 (21) 2641-xxxx</a>
        </div>
      </div>
    `,
  },
];

// ─── Render helpers ────────────────────────────────────────────────────────────

function renderSections(sections: typeof PRIVACY_SECTIONS): string {
  return sections.map((s, i) => `
    <div class="policy-section" id="sec-${s.id}">
      <div class="section-header" data-target="sec-${s.id}">
        <div class="section-num">${i + 1}</div>
        <h2>${s.title}</h2>
        <span class="section-toggle">▼</span>
      </div>
      <div class="section-body">${s.content}</div>
    </div>
  `).join('');
}

function renderToc(sections: typeof PRIVACY_SECTIONS): string {
  const items = sections.map(s => `
    <li><a href="#sec-${s.id}">${s.title}</a></li>
  `).join('');
  return `
    <div class="toc">
      <div class="toc-title">Nesta página</div>
      <ul class="toc-list">${items}</ul>
    </div>
  `;
}

// ─── App ───────────────────────────────────────────────────────────────────────

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a href="#" class="header-brand">
        <div class="header-escudo">🌿</div>
        <div class="header-title">
          Censo Rural Teresópolis
          <span>Prefeitura Municipal</span>
        </div>
      </a>
      <nav class="header-nav">
        <button class="nav-tab active" data-page="privacidade">Política de Privacidade</button>
        <button class="nav-tab" data-page="exclusao">Exclusão de Dados</button>
      </nav>
    </div>
    <div class="mobile-tabs">
      <button class="mobile-tab active" data-page="privacidade">🔒 Privacidade</button>
      <button class="mobile-tab" data-page="exclusao">🗑️ Exclusão</button>
    </div>
  </header>

  <div class="hero">
    <div class="hero-inner">
      <h1 id="hero-title">Política de <em>Privacidade</em></h1>
      <div class="hero-meta">
        <span id="hero-sub">Proteção de dados do recenseamento rural</span>
        <span>Versão 1.0 · Junho 2026</span>
        <span>Lei 13.709/2018 (LGPD)</span>
      </div>
    </div>
  </div>

  <main class="main-content">
    <div class="page active" id="page-privacidade">
      ${renderToc(PRIVACY_SECTIONS)}
      ${renderSections(PRIVACY_SECTIONS)}
    </div>

    <div class="page" id="page-exclusao">
      ${renderToc(DELETION_SECTIONS)}
      ${renderSections(DELETION_SECTIONS)}
    </div>
  </main>

  <footer class="site-footer">
    <p>
      <strong>Prefeitura Municipal de Teresópolis</strong> · Secretaria de Ciência Tecnologia<br>
      © 2026 · Todos os direitos reservados · Em conformidade com a LGPD (Lei 13.709/2018)
    </p>
  </footer>
`;

// ─── Tab switching ─────────────────────────────────────────────────────────────

function switchPage(page: string) {
  // Update all tab buttons
  document.querySelectorAll<HTMLButtonElement>('[data-page]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
  });

  // Update pages
  document.querySelectorAll<HTMLDivElement>('.page').forEach(p => {
    p.classList.toggle('active', p.id === `page-${page}`);
  });

  // Update hero
  const heroTitle = document.getElementById('hero-title')!;
  const heroSub   = document.getElementById('hero-sub')!;

  if (page === 'privacidade') {
    heroTitle.innerHTML = 'Política de <em>Privacidade</em>';
    heroSub.textContent = 'Proteção de dados do recenseamento rural';
  } else {
    heroTitle.innerHTML = 'Exclusão de <em>Dados</em>';
    heroSub.textContent = 'Como solicitar a remoção dos seus dados';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll<HTMLButtonElement>('[data-page]').forEach(btn => {
  btn.addEventListener('click', () => switchPage(btn.dataset.page!));
});

// ─── Accordion ────────────────────────────────────────────────────────────────

document.querySelectorAll<HTMLDivElement>('.section-header').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.closest<HTMLDivElement>('.policy-section')!;
    section.classList.toggle('collapsed');
  });
});
