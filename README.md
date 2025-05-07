# curso-spring-e-angular
Curso com spring-boot e angular

Tutorial spring boot

Comandos:
mvn spring boot run : Starta o projeto sem servidor embutido

instalar extenção visual studio code: Spring Boot Extension Pack

Spring Boot
Conjunto de dependencia já é pre configurada, servidor embutido como tomcat, jetty e Udertow.

Spring Boot Actuator 
Fornece endpoint prontos para uso e monitoramento e gerenciamento de aplicativo, alem de suporte integrado
e ferramenta de teste mais utilizado no mercado, pois facilita a escrita de teste unitário e integração

Spring core
Nucleo do framework com as funcionalidades basicas com a inversão de controle e injeção de independencia,
todos os outros módulos são construido em cima do spring core.

Spring Data JPA 
É a camada de abstração adicional, utilizando recursos da especificação JPA, alem de recursos próprios, como uma implementação
do padrão de repositories, criação de consultas na base a partir de nomes e atributos...
Acesso a dados que faz uma subtração de tecnologia de persistencia como JPA(Java Percistence API), 
Mongo DB, Redis e outros.
JPA(Java Percistence API) é uma especificação para mapeamento objeto-relacional em java, incluindo anotações, consultas JPQL e APIs para
interaçoes com a base de dados.
Hibernate é uma das implementações mais comuns da especificação JPA.

Spring Security submódulo
Serve para autenticação, autorização e outras questões de segurança.

Spring Cloud submódulo
Fornece um conjunto de ferramenta para desenvolver aplicativos baseado em microserviços.

Spring Batch submódulo
Processamento em lote

Spring AMQP submódulo
Traz suporte para mensagens sincronizado usando (Advanced Message Queuing Protocol)

Spring WebFlux submódulo
Suporte para programação reativa 

Spring MVC submódulo
É voltado para desenvolvimento de aplicativos Web seguindo padrão MVC(Model-View-Controller)


Spring Initializr
Iniciar as configurações através desse link:
https://start.spring.io/
Pode escolher diversas configurações como linguagem, versão do framework.
Escoher as dependencias

Spring Guides
https://spring.io/guides
Seja o que for que você esteja construindo, esses guias foram projetados para deixá-lo produtivo o mais rápido possível, 
usando as últimas versões e técnicas de projetos Spring recomendadas pela equipe Spring.

Autentication com WebSecurityConfigurerAdapter
Anotar com @Configuration
@EnableWebSecurity = desligar todas a configurações nativo do spring boot e customizar com suas necessidades.
* Para autenticar usando web security tem usuario e senha padrão do spring boot
* usuario:user
* senha: no console
.httpBasic(); = passa autenticação basico no header
.authorizeHttpRequests(); = Autorização no header da aplicação
.permitAll(); = libera todas solicitações
.authenticated(); = todas as solicitações tem que ser autenticadas
.csrf().disable(); = Desabilitando o csrf libera requisições do tipo post e delete e não faz bloqueio interno.

No controller o ResponseEntity<?> ou ResponseEntity<Object> = Responsável por custumizar os status de nossas requisições.
Usado para montar uma resposta e também um corpo dessa resposta
Não precisamos se preocupar em fornecer um objeto <?>
Em situações que precisamos ter mais controle sobre a resposta HTTP em um endpoint, 
o próprio Spring nos oferece a classe ResponseEntity que nos permite manipular os dados HTTP da resposta.
ResponseEntity: significa representar toda a resposta HTTP. Você pode controlar qualquer coisa que aconteça: 
código de status, cabeçalhos e corpo. Trabalhando com microservice, ResponseEntity para enviar resposta completa, com status, com cabeçalho e corpo.
Código	Status	            Descrição
200	    Ok	                Requisições bem sucedidas
201	    Created	            Quando efetuado algum cadastro
202	    Accepted            Requisição aceita, porém não executada
400	    Bad Request	        Quando não é possível realizar aquela requisição
401	    Unauthorized        Sem autorização para realiazar determinada requisição
404	    Not Found	        O servidor não consegue encontrar a rota ou requisição solicitada
429	    Too Many Requests	Quando o usuário efetua muitas requisições simultaneamente

Exemplo: 
@GetMapping("/status")
pulic ResponseEntity<?> status(){
	return new ResponseEntity<>(HttpStatus.CREATED);//para criação de formulário.
}

@Valid para validações customizadas
Exemplo: public ResponseEntity<?> salvar(@RequestBody @Valid ClassDto classDto){}
Precisa colocar@Valid na frente da classe ClassDto para que as validações sejam concluidas.

@Transactional
Quando os metodos for construtivos ou destrutivos é bom anotar com @Transactional principalmente
quando tem relacionamentos que vai ter deleção ou salvamento em cascatas, pois a caso der errado essa trasação
ele garante o rollback e garante que tudo volte ao normal e não teremos dados quebrados.


O que é um bean em spring Framework?
É uma classe onde o programador determina que o spring container é quem vai gerenciar as instancias dessa classe.
Ou seja é o spring que vai ficar responsavel ao criar, gerenciar e destruir todas instancias dessa classe,
como desenvolvedor não precisa dar mais new para criar instancias, é passado a responsabilidade para o spring container.

@Component
É usado o @Component o spring vai saber que essa classe é um bean é ele que vai gerenciar as instancias dessa classe.

@Service
Também você pode anotar suas classes e modifica suas regras de negócios que é também um bean.

@Repository
São classes que vão acontecer persistencia e transações com banco de dados.

@Controller
São classes que vai receber algum tipo de requisição .

@Autowired
Para o spring enxergar essa classe como um bean deixou passivel de se criar "pontos de injeção" dessa classe.
Usando o @Autowired assim vai ser criado pontos de injeção dessa classe que é um bean. A partir do momento que
você declara @Autowired você diz para o spring que naquele ponto é um ponto de injeção de dependencia ou seja
dependendo do escopo da variavel o spring vai criar, gerar e destruir a instancia dessa classe quando for preciso.

Quando utilizar anotação @Bean em spring?
Quando precisamos que o spring gerencie instancia de classes externas que não criamos, foram classes que tivemos que importar para a nossa
aplicação mas de biblioteca externas, como essas classes não pertence a nossa aplicação não tem como anotar como @Component, @Service entre outras.
Para isso criamos métodos para retornar o tipo dessas classes dentro das classes de configuração do spring as classes que são anotadas com
@Configuration e esses métodos precisa ser anotado com @Bean, a partir do momento que anotamos esse método com @Bean o spring sabe que ele vai 
gerenciar essa classe de uma biblioteca externa, assim mesmo que criamos um bean em nossa aplicação com as classes atuais ela também vai poder
ter pontos de injeção de dependência, também vai poder utilizar essas classes e criar pontos de injeção de dependencia com @Autowired em outras
classes onde você determinar que o spring vai poder criar, gerenciar e destruir as instancias dessas classes determinando o escopo dessas variaveis.
Quando você quiser que sua aplicação tenha beans de classes externas é preciso criar um método que retorne esse tipo e anotar com @Bean assim o
spring vai saber que aquela classe é um bean e vai gerenciar as instancias.

@AllArgsConstructor
Automaticamente cria o construtor caso precisar. 

@CrossOrigin(origins="*", maxAge=3600) = Acesso seja permitido de qualquer fonte

@Data
Essa anotação faz parte da dependencia Lombok para gerar os geters se seters

Arquitetura Spring boot

A função do controller é enviar e receber os dados para o usuario quando solicitar
faz regra de interface com usuario da camada de api, conversa com a camada de service
controllers:
Onde fica as anotações 

@RequestController
@RequestMapping("/endpoint")
public class PessoaController {

	@Autowired
	PessoaService pessoaService 

	@GetMapping
	public List<Pessoa> listar(){
		return pessoaService.buscarTodas();
	}
	ou
	@GetMapping(value = "/{id}")
	public Pessoa findById(@PathVariable Long id){
		return pessoaService.findById(id);
	}
	
	@PostMapping
	public Pessoa salvar(Pessoa pessoa){
		return pessoaService.salvar(pessoa);
	}
}
__________________________________________________________________________________________________________________
Service:
Onde fica as lógicas com as regras de negócio como aquele objeto se comporta
realizar operações de negocio que fica entre o controller e o repository, também fazendo o gerenciamento e 
transação com o banco de dados.

@Component
@Service
public class ClassService{
    @Autowired
	ClassRepository classRepository;
	
	public ClassService(ClassRepository classRepository){
		this.classRepository = classRepository;
	}
	
	public Pessoa salvar(Pessoa pessoa){
		return repository.save(pessoa);
	}
	
	public List<Pessoa> buscarTodas(){
		return repository.findAll();
	}
}
public class ProdutoService {
    @Autowired
	ProdutoRepository produtoRepository;
	
	public List<ProdutoModel> listarProduto(ProdutoModel produtoModel){
		return produtoRepository.findAll();
	}

	@Transactional
	public ProdutoModel salvarProduto(ProdutoModel produtoModel) {
		return produtoRepository.save(produtoModel);
	}	

}
//Metodo no serviço para paginação
public Page<ProdutoModel> listarProdutoComPaginacao(Pageable pageable){
	return produtoRepository.findAll(pageable);
}
__________________________________________________________________________________________________________________
DTO(Data Transfer Object): Objeto para transferir Dados(padrão de projeto)
É uma classe que vai representar as informações e requisições,diminui a exposição de dados e contem mais segurança
Pode conter validações
@NotBlank //verifica se o campo não é null ou string vazia
@Size(max = 35) //limita o numero de caracteres
@Email,@Cpf,@NotNull, @NotEmpt entre outras anotações para fazer validações
@Length(min=5, max=100) //valida o minimo de caracter e o maximo caracter
@Pattern(regexp="Back-end|Front-end")
@Pattern(regexp="Ativo|Inativo")
Usando a dependencia spring-boot-starter-validation

@Data
public class NomeDto{
	@NotBlank
	private String varNumber;
	
	@NotBlank
	@Size(max = 7)
	private String varString	
}

ou a partir do java 14 podemos usar uma record em vez de class

public record NomeDto(Long campo1, String campo2, String campo3, String campo4...inserir todos os campos){
	@NotBlank
	private String varNumber;
	
	@NotBlank
	@Size(max = 7)
	private String varString	
}
Record é basicamente uma classe java, não temos construtor vazio e sim contendo os campos que precisa expor(utilizar) e não tem
metodos geters e seters, a unica forma de ter dados é através do construtor.
Pode criar mais de uma Dto.
Muda a logica na camada de controller e serviço 
É utilizado na camada de serviço, o serviço que pega o dto,transforma e uma entidade, vai 
fazer os acessos ao banco de dados, e vai retornar a resposta para o controller

No service vai ficar desta forma:
Falta inserir ...
__________________________________________________________________________________________________________________
Model:
Caso sua tabela tem o nome da entidade não precisa usar a anotação @Table()
@Entity
@Table(name= "NOME_TABELA")

public class ClassModel implements Serializable{
    private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.Auto)// gera id automaticamente
	private UUID id;
	ou
	private long id
	@Column(nullable = false, unique = true, length = 10)
	private String atributoString;
	
	@Column(nullable = false, length = 10)
	private String atributoString;
	
	//gets e sets

}
__________________________________________________________________________________________________________________
Controller:
Obs: para criar a instancia de um bean usamos a anotação @Component
@RestController 
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/direcionamento")
public class ClassController{

	final ClassService classService;
	public ClassController(ClassService classService){
		this.classService = classService;
	}
	--------------------------------------------------------------------------------------------------------------
	@PostMapping("/produto")
	public Produto salvarProduto(@RequestyBody Produto produto){
		return produtoRepository.save(produto);
	}
	
	//faz uma conversão de Dto para Model antes de salvar no banco de dados
	BeanUtils.copyProperties(produtoDto, produtoModel); 
	@PostMapping("/produto")
	public ResponseEntity<ProdutoModel> salvarProduto(@RequestBody @Valid ProdutoDto produtoDto){
		BeanUtils.copyProperties(produtoDto, produtoModel); 
		produtoModel.setData(LocalDateTime.now(ZoneId.of("UTC")));
		return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.save(produtoModel);		
	}
	@Autowired
	private ClasseService classService;
	@Autowired
	private TransferenciaService transferenciaService;
	@ApiOperation("Efetua uma transação")
	@PostMapping("/efetuar")
	public void salvar(@RequestBody ClasseModel classModel) {
		classeService.salvar(classeModel);
		TransferenciaService.Transferir(classeModel);
	}
	@Autowired
	private ClienteService clienteService;
	@ApiOperation("Cadastra um cliente")
	@PostMapping("/cadastrar")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Cliente> cadastrarCliente(@RequestBody Cliente cliente) {
		return ResponseEntity.status(HttpStatus.CREATED).body(clienteService.salvar(cliente));
	}
	--------------------------------------------------------------------------------------------------------------
	@PutMapping
	public ResponseEntity<Object> update(@PathVariable(value = "id") UUID id, @RequestBody @Value PreCarteiraJobDto preCarteiraJobDto){
		Optional<PreCarteiraJobModel> modelOptional = preCarteiraJobService.findById(id);
		if(!modelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NOT_FOUND.");
		}
		var preCarteiraJobModel:PreCarteiraJobModel = modelOptional.get();
		preCarteiraJobModel.set();
		preCarteiraJobModel.set();
		
		return ResponseEntity.status(HttpStatus.OK).body(preCarteiraJobService.save(preCarteiraJobModel));
	}
	
	@PuttMapping
	public ResponseEntity<Object> save(@PathVariable(value = "id") UUID id, @RequestyBody @Valid ClassDto classDto){
		Optional<ClassModel> modelOptional = classService.findById(id)
		if(!modelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NOT_FOUND.");
		}
		var classModel = new ClassModel()
		
		BeanUtils.copyProperties(classDto, classModel);
		
		
		
		return ResponseEntity.status(HttpStatus.OK).body(classService.save(classModel));
	}
	
	@PuttMapping("/produto")
	public void deleteProduto(@RequestyBody Produto produto){
		produtoRepository.save(produto);
	}
	@Autowired
	private ClienteService clienteService;
	@ApiOperation("Atualiza um cliente")
	@PutMapping("/atualizar/{id_cliente}")
	public ResponseEntity<Cliente> atualizarCliente(@PathVariable Long id_cliente, @RequestBody @Valid Cliente cliente)throws URISyntaxException {
		clienteService.alterar(id_cliente, cliente);
		return new ResponseEntity<>(cliente, HttpStatus.CREATED);
	}
	@Autowired
	private ContaService contaservice;
	@ApiOperation("Atualiza uma conta")
	@PutMapping("/atualizar/{id_conta}")
	public ResponseEntity<Conta> atualizarConta(@PathVariable Long id_conta, @RequestBody @Valid Conta conta)throws URISyntaxException {
		contaservice.alterar(id_conta, conta);
		return new ResponseEntity<>(conta, HttpStatus.CREATED);
	}
	--------------------------------------------------------------------------------------------------------------
	@GetMapping("/produto") ou @RequestMapping(method = RequestMethod.GET) -> É a mesma coisa os dois
	public List<Produto> listarProduto(){
		return produtoRepository.findAll());
	}
	
	@GetMapping("/produto/{id}")
	public List<Produto> listarProduto(@PathVariable(value="id") long id){
		return produtoRepository.findById(id));
	}
	dentro do repository
	public Produto findById(long id);
	
	@GetMapping
	public ResponseEntity<List<ClassModel>> getAllList(){
		return ResponseEntity.status(HttpStatus.OK).body(classService.findAll());
	}
	//metodo no controller do tipo Page para paginação
	@GetMapping("/produto-com-paginação")
	public ResponseEntity<Page<ProdutoModel>> listarProdutoComPaginacao(@PageableDefault(page=0, size=10, sort="id", direction=Sort.Direction.ASC) Pageable pageable ){
		return ResponseEntity.status(HttpStatus.OK).body(produtoService.listarProdutoComPaginacao(pageable));
	}
	@GetMapping("/{id}")
	public ResponseEntity<Object> getOneObject(@PathVariable(value = "id") UUID id {
	    Optional<ClassModel> modelOptional = classService.findById(id);
		
		if(!modelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NOT_FOUND.");
		}
		return ResponseEntity.status(HttpStatus.OK).body(modelOptional.get());
	}
	@Autowired
	private TransacoesService transacoesService;
	@ApiOperation("Lista uma transação através do seu ID")
	@GetMapping("/buscar/{id_transacao}")
	public ResponseEntity<ClasseModel> buscarTransacaoPorId(@PathVariable Long id_transacao) {
		return ResponseEntity.ok(transacaoService.listarPorId(id_transacao));
	}
	@Autowired
	private ClienteService clienteService;
	@ApiOperation("Lista todos os clientes")
	@GetMapping("/listar")
	public ResponseEntity<List<Cliente>> listarClientes() {

		return ResponseEntity.ok(clienteService.listar());
	}
	@Autowired
	private ClienteService clienteService;
	@ApiOperation("Lista um cliente atravÃ©s do seu ID")
	@GetMapping("/listar/{id_cliente}")
	public ResponseEntity<Cliente> listarClientePorId(@PathVariable Long id_cliente) {

		return ResponseEntity.ok(clienteService.listarPorId(id_cliente));
	}
	--------------------------------------------------------------------------------------------------------------
	@DeleteMapping("/produto")
	public void deleteProduto(@RequestyBody Produto produto){
		produtoRepository.delete(produto));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteOneObject(@PathVariable(value = "id") UUID id {
	    Optional<ClassModel> modelOptional = classService.findById(id);
		
		if(!modelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NOT_FOUND.");
		}
		return ResponseEntity.status(HttpStatus.OK).delete(modelOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body(modelOptional.get());
	}
	@Autowired
	private ClienteService clienteService;
	@ApiOperation("Deleta um Cliente")
	@DeleteMapping("/deletar/{id_cliente}")
	public void deletarCliente(@PathVariable Long id_cliente) {
		clienteService.deletar((id_cliente));
	}
}	
__________________________________________________________________________________________________________________
Repository:
Anotação @Repository = Faz acesso e gerencia a transação com o banco de dados.
O JpaRepository já existe varios métodos pronto para utilizar para transações com banco de dados
Realizar operações individuais de acesso ao banco de dados (CRUD)
Não precisa declarar a anotação quando extende de JpaRepository ele já traz @Repository.
Mas para melhor visualização pode declarar @Repository
@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

	
	/* Método para ordenar lista por pedido */
	public List<PreCarteiraJob> findByOrderByPedidoDesc();

	/* Método para ordenar lista por pedido e por item */
	public List<PreCarteiraJob> findByPedidoOrderByItemDesc(String nome);

	Dentro do controler
	@GetMapping("api/ordenarPedidos/{pedido}")
	public List<PreCarteiraJob> ordenarPedidos(){
		return acao.findByPedidoOrderByItemDesc(pedido);
    }

	/* Método para listar pedido */
	public List<PreCarteiraJob> findByAll();


	/* Método para mostrar por id ou código */
	public PreCarteiraJob findById(int codigo);


	List<Tutorial> findByPublished(boolean published);


	/* Método para filtrar dados que contém uma letra ou termo completo como o like do sql*/
	List<PreCarteiraJob> findByPedidoContaining(String termo);
	Dentro de controle:
	@GetMapping("api/pedidoContem/{pedido}") // pode ser apenas uma letra ou numero que contém
	public List<PreCarteiraJob> pedidoContem(pedido){
		return acao.findByPedidoOrderByItemDesc(pedido);
    }
	
	@Query(value = "SELECT SUM(item) FROM pessoas", nativeQuery = true)
	publi int somaItem();
	Dentro de controle:
	@GetMapping("api/somaItem")
	public int somaItem(){
		return acao.somaItem;
    }
	
	
	@Query(value = "SELECT * FROM pessoas WHERE idade >= :pedido", nativeQuery = true)
    List<PreCarteiraJob> pedidoMaiorIgual(String pedido);
    Dentro de controle:
	@GetMapping("api/pedidoMaiorIgual") 
	public List<PreCarteiraJob> pedidoMaiorIgual(){
		return acao.pedidoMaiorIgual(pedido);
    }

}
__________________________________________________________________________________________________________________
Class principal:

@SpringBootApplication
public class SpringBootApplication{
	public static void main(String[] args){
		SpringApplication.run(SpringBootApplication.class, args);
	}
	
	//Inserir dados simulando a base de dados
	@Bean
	CommandLineRunner initDatabase(NomeRepositorio nomeRepositorio){
		//Assim que a aplicação subir vai executar esse metodo com toda lógica inclusa
		return args -> {
			courseRepository.deleteAll();
			
			Model m = new Model();
			m.setCampo1("Teste 1");
			m.setCampo2("Teste 2");
			
			courseRepository.save(m);
		};
	}
}
----------------------------------------------------------------------------------------------------------------
Anotações JPA
@Entity, @Table, @Id, @GeneratedValue, @Column, @Transactional, @ManyToMany, ,, @OneToOne, @JoinTable e @JoinColumn
-----------------------------------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------------------------------
Anotação @OneToMany = Um para muitos
tb_publisher para tb_book
Dentro de PublisherModel
@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
Quando enviar uma determinada editora(tb_publisher) para o cliente vamos imaginar que ele solicita via api os detalhes de uma
determinada editora e dessa forma vai estar mapeado na serealização e vai esperar por uma coleção de livros(tb_book) mas quando deixa 
o carregamento fetch = FetchType.LAZY = preguiçoso muitas vezes essa coleção não vai estar diponivel podendo da erro na serealização.
Então deixamos access = JsonProperty.Access.WRITE_ONLY para escrita assim na leitura ja garante que isso não vai dar erro de
serealização 

@OneToMany(mappedBy = "publisher", fetch = FetchType.LAZY)
Entidade editora(tb_publisher) para varios livros da entidade(tb_book). 
O mappedBy= "publisher" é informado que a entidade publisher é responsavel pelo relacionamento e foi definido 
como atributo PublisherModel publisher.
fetch = FetchType.LAZY = preguiçoso 
FetchType.EAGER =  ancioso
fetch = FetchType.LAZY é uma configuração extra para quando for buscar a entidade PublisherModel na base de dados
somente vamos incluir a subconsulta para trazer quais os livros da entidade(tb_book) que fazem parte da editora(tb_publisher)
na base de dados quando necessário que significa FetchType.LAZY = carregamento lento para uma "performance melhor".
Se definir a configuração FetchType.EAGER ele sempre vai buscar a editora(tb_publisher) na base de dados e também automaticamente
irá carregar e fazer todas as subconsultas para trazer cada um dos livros que fazem parte desta editora(tb_publisher) muitas
vezes não precisamos de todos esses dados a todo momento
 

private Set<BookModel> books = new HashSet<>(); 
Atributo books Set traz todas as coleções melhor que a List

Gets e sets
public Set<BookModel> getBooks() { return books; }
public void setBooks(Set<BookModel> books) { this.books = books; }
------------------------------------------------------------------------------------------------------------------
Anotação @ManyToOne Muitos para um
tb_book para tb_publisher
Dentro de BookModel
@ManyToOne = tb_book para tb_publisher
//@JsonProperty(access = JsonProperties.Access.WRITE_ONLY) //remover junto com FetchType.Lazy

@ManyToOne(fetch = FetchType.LAZY) 
Faz relacionamento de varios livros(tb_book) para uma entidade editora(tb_publisher)

@JoinColumn(name = "publisher_id")
Cria uma chave estrangeira (publisher_id) dentro da entidade(tb_publisher) vai ser uma coluna a mais que será a chave estrangeira

Cria os gets e sets 
private PublisherModel publisher;
public PublisherModel getPublisher() { return publisher; }
public void setPublisher(PublisherModel publisher) { this.publisher = publisher; }

Anotação @ManyToMany = muitos para muitos
tb_Author para tb_book e tb_book para tb_Author
@ManyToMany//(fetch = FetchType.LAZY)
Esse relacionamento é feito com um pouco diferente do relacionamento que vimos anteriormente.
O relacionamento @ManyToMany podem ver que possui uma coleção de ambos os lados diferentes
do relacionamento @OneToMany e @OneToOne que tinha uma coleção apenas em um dos lados da relação.
Agora considerando uma coleção de ambos os lados.

@JoinTable(
            name = "tb_book_author",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id"))
Faz um mapeamento para criar um relacionamento na base de dados definindo uma tabela auxiliar com @JoinTable, pois 
Temos uma coleção de ambos os lados não vai conseguir criar uma coluna que seja uma chave estrangeira e dentro de 
outro como foi feito anteriormente no caso do BookModel que ele possui uma chave de publisher_id do relacionamento com 
PublisherModel nesse caso como temos essas coleções de ambos os lados vamos precisar de uma outra forma de criar essa relação.
Para isso precisa ter uma tabela auxiliar que vai unir esses dois ids "book_id e author_id" dessas 2 entidades.
@JoinTable(name = "tb_book_author") nome da tabela auxiliar como tb_book_author para relacionar tb_book com tb_author que 
foi colocado o relaciomento das entidades que relacionam de muitos para muitos.
joinColumns defini tanto os ids que vão ser as chaves primarias e também as chaves estrangeiras de ambos os lados,
onde um vai ser a chave estrangeira do outro e vice-versa.Para acionar para mapear tudo isso podemos utilizar objeto
@joinColumns onde vai passar o name = "book_id" que vai ser essa coluna que vai conter a chave estrangeira de BookModel 
e também vice-versa ou seja inverseJoinColumns = @JoinColumn(name = "author_id") onde passa a outra coluna que também 
vai conter o id name = "author_id" da entidade tb_author que é o author_id.
			
private Set<AuthorModel> authors = new HashSet<>();
E da mesma forma o BookModel tem uma coleção de autores com atributo authors, tem um set de AuthorModel

Cria os gets e sets de author
public Set<AuthorModel> getAuthors() { return authors; }
public void setAuthors(Set<AuthorModel> authors) { this.authors = authors; }
------------------------------------------------------------------------------------------------------------------
