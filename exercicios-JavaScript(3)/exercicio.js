//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/exercicios-JavaScript(2)/exercicio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-12/ex016.html";//Definir para que pagina esse botao ira levar  

window.location.href = novaPagina;//Mudar para a proxima pagina
}

        //exercicio Verificador de idade
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting normally
           
            // Get selected radio button value
            var selectedOption = document.querySelector('input[name="option"]:checked').value;
           
            // Create an array of possible responses for each option
            var responses = {
                // triste
            option1: ['Sinto muito que você está se sentindo assim. Se quiser conversar estou aqui.', 
            'Às vezes, expressar o que está sentindo pode aliviar um pouco do peso. Estou aqui para ouvir.', 'Lembrese de que seus sentimentos são válidos, e está tudo bem não estar bem.', 'Às vezes, um abraço virtual pode ser reconfortante. 🤗', 'Estou torcendo para que dias mais leves e felizes cheguem em breve.',  'Mesmo nas tempestades, há sempre uma luz no horizonte. Estou aqui para ajudar a encontrar essa luz.',  'Às vezes, é preciso tempo para curar. Tenha paciência consigo mesmo.', 'O que posso fazer para te ajudar a se sentir melhor?',  'Se quiser compartilhar o que está acontecendo, estou aqui para te apoiar.' , 'Às vezes, escrever sobre o que está sentindo pode ser uma forma terapêutica. Se quiser, estou aqui para ler.',  'Lembrese de que é normal ter altos e baixos. Estou aqui para os dois momentos.',  'Às vezes, uma boa música pode levantar o ânimo. Alguma música favorita que você gostaria de compartilhar?',  'A vida é cheia de desafios, mas você é mais forte do que pensa.',  'Cada dia é uma nova oportunidade para recomeçar. aqui para te apoiar nesse recomeço.',  'Às vezes, um sorriso mesmo que solicitado pode desencadear sentimentos mais positivos. 😊',  'Acreditar na sua capacidade de superar adversidades. Você é incrível.', 'Se precisar de um ombro para chorar, estou aqui virtualmente para você.', 'A tristeza é passageira, mas sua força é firmeza.', 'Há beleza mesmo nas situações mais difíceis. Às vezes, precisamos procurar um pouco mais para encontrála', 'Estou enviando pensamentos positivos e energias boas para você. 💖'],
                // felizes
            option2: ['Fico tão feliz em saber que você está se sentindo bem! 😊','Seu sorriso é contagiante! Estou feliz por estar compartilhando esse momento de alegria com você.','Que notícia maravilhosa! Comemore bastante esse momento especial.','Ver você feliz me faz feliz também. Que essa alegria perdure!','Parece que você está radiante de felicidade. Conte mais sobre o que aconteceu!','Alegria é o melhor sentimento. Estou celebrando contigo, mesmo que à distância.','Seu bom humor ilumina o dia de qualquer pessoa. 😄',
            'Que ótimo saber que você está aproveitando a vida. Continue assim!','A felicidade te cai tão bem! Estou animado/a por você.','Essa notícia fez o meu dia também. Estou tão feliz por você!','A alegria que você transmite é como um raio de sol em um dia chuvoso. ☀️','Que todos os seus dias sejam tão detalhados quanto é que você está feliz.','Se precisar de mais razões para sorrir, estou aqui para te ajudar a encontrá-las.','Aproveite cada momento dessa felicidade. Você merece!','Parece que o universo conspirou a seu favor. Aproveite cada segundo dessa boa fase.','Nada como ver alguém que gostamos tão feliz. Estou torcendo para que essa felicidade se multiplique.','Sua felicidade é contagiosa. Continue irradiando esse positivismo por onde passa.','Se precisar de alguém para compartilhar esses momentos de felicidade, estou aqui.','Que sua felicidade seja tristeza e que momentos ainda mais especiais estejam no caminho.', 'Estou enviando vibrações positivas para que essa felicidade se espalhe ainda mais. 🌈'],
                // com raiva
            option3: ['Sinto muito que você esteja passando por isso. Se quiser desabafar, estou aqui.', 'Às vezes, expressar a raiva pode ser um alívio. Estou pronta para ouvir, se quiser compartilhar.', 'É normal sentir raiva. Estou aqui para te apoiar enquanto você atravessa esse momento.', 'A raiva é uma emoção poderosa. Se precisar de espaço, estou aqui respeitando isso.', 'Respira fundo. Se quiser conversar sobre o que está acontecendo, estou disponível.', 'Às vezes, é preciso tempo para processar a raiva. Estou aqui para te apoiar durante esse processo.', 'Lembre-se de que seus sentimentos são válidos, mesmo quando são difíceis.', 'Se precisar de um ombro para desabafar, estou aqui para você.', 'A raiva pode ser intensa, mas também pode ser uma oportunidade para aprender mais sobre si mesma. Estou aqui para te ajudar nesse processo.', 'Às vezes, é útil canalizar a raiva para algo positivo. Estou aqui para apoiar qualquer decisão que você tomar.', 'Estou aqui para oferecer suporte enquanto você enfrenta essa raiva. Juntas, podemos encontrar maneiras de lidar com isso.', 'A raiva pode ser uma emoção desafiadora. Se quiser compartilhar o que está acontecendo, estou aqui para ouvir.', 'Se precisar de um conselho ou apenas de alguém para te ouvir, estou aqui para ajudar.', 'Às vezes, a raiva pode obscurecer nossos pensamentos. Estou aqui para te ajudar a clarear as coisas, se precisar.', 'Lembre-se de que é normal sentir raiva, mas também é importante encontrar maneiras saudáveis de lidar com ela. Estou aqui para te apoiar nesse processo.', 'Você não está sozinha nisso. Estou aqui para te apoiar, independentemente do que estiver enfrentando.', 'Às vezes, um desabafo pode ser libertador. Se quiser compartilhar o que está sentindo, estou pronta para ouvir.', 'Se sentir pronta para conversar, estou aqui para te ouvir e oferecer apoio.', 'A raiva pode ser uma oportunidade para definir limites saudáveis. Estou aqui para te ajudar a navegar por esse processo.', 'Não importa o motivo da raiva, estou aqui para te apoiar enquanto você enfrenta esses sentimentos.'],
                // magoada
            option4: ['Sinto muito que você esteja passando por isso. Estou aqui para o que precisar.', 'Às vezes, as feridas emocionais são tão difíceis quanto as físicas. Estou aqui para te ajudar a sarar.', 'Magoar-se é uma experiência difícil. Se quiser compartilhar, estou aqui para ouvir.', 'A dor emocional pode ser avassaladora. Estou aqui para oferecer conforto e apoio.', 'Lembre-se de que suas emoções são válidas. Estou aqui para te apoiar durante esse momento difícil.', 'A dor pode ser uma professora cruel, mas também nos ensina a crescer. Estou aqui para te ajudar nesse processo.', 'Se precisar de um ombro para chorar, estou aqui para oferecer consolo.', 'Machucar-se emocionalmente é um processo difícil. Estou aqui para te acompanhar nessa jornada.', 'Se quiser falar sobre o que aconteceu, estou aqui para ouvir sem julgamentos.', 'Às vezes, só o fato de compartilhar a dor pode aliviar um pouco. Estou aqui para escutar.', 'A dor pode parecer insuportável, mas lembre-se de que você é mais forte do que imagina.', 'Estou aqui para te apoiar enquanto você enfrenta essa magoa. Juntas, podemos superar.', 'Às vezes, o tempo é o melhor remédio. Estou aqui para o que precisar, agora e no futuro.', 'A magoa pode parecer uma tempestade, mas também passa. Estou aqui para te ajudar a atravessar.', 'Se precisar de espaço, respeito isso. Mas estou aqui quando quiser conversar.', 'Magoar-se é uma parte difícil da vida. Estou aqui para ser seu apoio durante esse momento.', 'Às vezes, o primeiro passo para a cura é reconhecer a dor. Estou aqui para te apoiar nesse processo.', 'Lembre-se de que você não está sozinha. Estou aqui para compartilhar o peso da sua dor.', 'Às vezes, palavras não são suficientes. Estou aqui com o coração aberto para te ouvir.', 'Que a luz da cura possa encontrar o caminho até você. Estou aqui para te ajudar nessa jornada.'],
                // medo
            option5: ['Você não está sozinha; estou aqui para você.','Se precisar de alguém para conversar, estou aqui.','O medo é uma emoção humana normal; não precisa enfrentá-lo sozinha.','Às vezes, a coragem não é a ausência de medo, mas a persistência apesar dele.','Você é mais forte do que pensa, e eu acredito em você.','Seu medo não define você; sua coragem de enfrentá-lo sim.','Estou aqui para apoiar cada passo que você der para superar isso.','Às vezes, a vulnerabilidade é o primeiro passo para a cura.','O medo pode ser intimidante, mas sua coragem é inspiradora.','Lembre-se de que está tudo bem pedir ajuda quando precisar.','A luz no fim do túnel pode parecer distante, mas juntos podemos chegar lá.','Estou aqui para ajudar a dissipar as sombras do medo que você está enfrentando.','Cada desafio que você supera é um passo em direção à sua força interior.','Não tenha medo de pedir apoio; é sinal de sabedoria reconhecer quando precisamos de ajuda.','Você é corajosa, mesmo quando sente medo. Isso é admirável.','A jornada para superar o medo pode ser assustadora, mas estou ao seu lado.','Seu medo não define seu futuro; sua coragem sim.','Às vezes, enfrentar nossos medos é a única maneira de libertar nossa verdadeira força.','Mesmo nas noites mais escuras, a luz da sua coragem brilha intensamente.','Estou aqui para ajudar a transformar o medo em oportunidade de crescimento.','Sua força é maior do que qualquer medo que possa enfrentar.','Você não está fraca por sentir medo; está humana. E isso é lindo.','A verdadeira coragem está em continuar tentando, mesmo quando o medo tenta te parar.','Cada passo que você dá em direção ao seu medo é um passo em direção à liberdade.','Você é resiliente e capaz de superar qualquer desafio que a vida apresente.','Estou aqui para ajudar a construir pontes sobre os vales do seu medo.','O medo pode ser uma sombra, mas a luz da sua coragem sempre prevalecerá.','Juntos, podemos enfrentar qualquer medo que apareça no seu caminho.','Seu coração é mais forte do que qualquer tempestade de medo que possa surgir.','A coragem não é a ausência de medo, mas a determinação de seguir em frente mesmo com ele.','Você é a autora da sua própria história, e o medo é apenas um capítulo temporário.','A verdadeira beleza reside na coragem de enfrentar nossos medos mais profundos.','Não permita que o medo impeça você de alcançar todo o seu potencial.','Você é uma guerreira, e guerreiras enfrentam seus medos de frente.','Estou aqui para apoiar sua jornada, não importa quão íngreme ela possa parecer.','Às vezes, é preciso coragem para admitir que estamos com medo. Você já deu o primeiro passo.','Seu coração é mais corajoso do que qualquer medo que possa tentar ocupar espaço nele.','A força para superar o medo está dentro de você, esperando para ser descoberta.','Você não está fugindo do medo; você está enfrentando-o corajosamente.','Estou aqui para lembrar a você o quão incrível e corajosa você é.','O medo pode parecer uma montanha, mas estou aqui para ajudar a escalar cada pico.','Cada passo que você dá em direção ao medo é uma vitória em si mesma.','O medo pode tentar te parar, mas sua determinação é mais poderosa.','Você é uma obra-prima em progresso, e o medo não pode apagar sua beleza.','Sua coragem é como uma luz que brilha mesmo nas situações mais escuras.','Não permita que o medo escreva sua narrativa; você é a autora da sua própria história.','Seu coração é um oceano de coragem, capaz de enfrentar qualquer tempestade.','Estamos todos enfrentando nossos próprios medos; você não está sozinha nisso.','O medo pode ser uma estrada difícil, mas estou aqui para caminhar ao seu lado.','Sua coragem é a chave que abrirá portas para um futuro cheio de possibilidades.'],
                // ansiosa
            option6: ['Sua força em enfrentar a ansiedade todos os dias é verdadeiramente admirável.','Estou aqui para apoiar você em todos os altos e baixos da ansiedade.','Lembre-se de que a ansiedade não define quem você é; você é muito mais do que isso.','Se precisar de alguém para conversar nos momentos difíceis, estou aqui para ouvir.','Sua coragem em enfrentar a ansiedade é inspiradora. Estou ao seu lado nessa jornada.','Mesmo nos dias mais desafiadores, sua resiliência brilha intensamente.','Estou aqui para ajudar a dissipar as nuvens da ansiedade que pairam sobre você.','A ansiedade pode ser uma tempestade, mas você é a calma que a segue.','Seu coração é valente, enfrentando a ansiedade com coragem todos os dias.','A jornada pode ser difícil, mas estou aqui para oferecer apoio e conforto.','Não há pressa; estou aqui para apoiar você enquanto enfrenta a ansiedade no seu próprio ritmo.','Você é mais forte do que pensa, mesmo nos momentos em que a ansiedade tenta te enfraquecer.','Cada passo que você dá para enfrentar a ansiedade é um passo em direção à sua liberdade emocional.','Sua coragem em lutar contra a ansiedade é um testemunho da sua incrível força interior.','Mesmo quando a ansiedade parece esmagadora, estou aqui para lembrar que isso também passará.','Sua jornada com a ansiedade é única, e estou aqui para apoiar você a cada passo.','A ansiedade pode ser desafiadora, mas você não está sozinha; estou aqui para caminhar ao seu lado.','Sua capacidade de enfrentar a ansiedade com determinação é verdadeiramente notável.','A ansiedade pode ser um fardo pesado, mas estou aqui para ajudar a aliviar o peso sempre que possível.','Estamos todos em constante crescimento, e sua jornada com a ansiedade é uma parte importante desse ,processo.','Cada resp,iração profunda que você faz é um ato de coragem contra a ansiedade.','Não permita que a ansiedade diminua a luz brilhante que há dentro de você. Estou aqui para ajudar a reacendê-la.','A ansiedade pode tentar roubar sua paz, mas estou aqui para ajudar a protegê-la.','Você é mais resiliente do que imagina, superando os desafios da ansiedade com graça.','Sua jornada com a ansiedade é única, mas você não precisa enfrentá-la sozinha. Estou aqui para apoiar ,você.','Cada dia em que você enfrenta a ansiedade é um testemunho da sua incrível coragem.','Lembre-se de que está tudo bem pedir ajuda quando a ansiedade se torna avassaladora.','Sua coragem em lidar com a ansiedade é um exemplo poderoso para todos ao seu redor.','A ansiedade pode ser uma sombra, mas estou aqui para ajudar a trazer luz para os momentos mais escuros.','Você não está definida pela ansiedade; você é definida pela sua resistência e coragem.','Estou aqui para oferecer um ombro amigo nos dias em que a ansiedade parece insuperável.','Sua jornada é única, e eu valorizo cada passo que você dá para enfrentar a ansiedade.','Seu coração é um guerreiro, enfrentando a ansiedade com determinação e compaixão.','Não se esqueça de celebrar as vitórias, grandes e pequenas, contra a ansiedade. Você merece reconhecimento.','A ansiedade pode tentar distorcer a realidade, mas estou aqui para ajudar a trazer clareza.','Mesmo nos momentos mais desafiadores, sua coragem contra a ansiedade é inegável.','A ansiedade pode ser uma batalha difícil, mas você não está sozinha. Estou aqui para apoiar você.','Sua autenticidade ao lidar com a ansiedade é um presente para o mundo. Continue sendo você mesma.','ansiedade pode tentar te convencer do contrário, mas você é digna de amor, apoio e compreensão.','Estou aqui para ajudar a construir pontes sobre os vales de incerteza que a ansiedade cria.','Sua jornada com a ansiedade é uma história de coragem que está sendo escrita a cada dia.','A ansiedade pode ser desafiadora, mas você é mais resiliente do que imagina.','Não importa quão densa seja a neblina da ansiedade, estou aqui para ajudar a dissipá-la.','Sua jornada é única, e estou aqui para apoiar você na conquista de cada vitória sobre a ansiedade.','A ansiedade pode tentar te fazer duvidar, mas sua força interior é inabalável.','Cada passo que você dá em direção à paz interior é um triunfo sobre a ansiedade.','A ansiedade pode ser um desafio, mas você é uma guerreira corajosa.','Estou aqui para ajudar a transformar a ansiedade em oportunidade de crescimento pessoal.','Sua coragem em enfrentar a ansiedade é um farol brilhante para todos ao seu redor.','Não importa o quão difícil seja o caminho, estou aqui para apoiar você enquanto enfrenta a ansiedade.']
            };
           
            // Generate a random index within the bounds of the array
            var randomIndex = Math.floor(Math.random() * responses[selectedOption].length);
           
            // Display a random response in the div element with id "res"
            document.getElementById('res').textContent = responses[selectedOption][randomIndex];
           });