const gridSpace = 20;
const Englishvoca = ["property ", "enhance ", "hypothesis", "relaxed ", "handpicked ", "exaggerated", "so long as ", "renovate ", "long for ", "enclose ", "durable ", "atmosphere ", "application ", "commitment ", "concern ", "properly ", "disruption ", "promote ", "strive to do ", "relaxing ", "extension ", "connect with ", "replacement ", "deserve ", "residential ", "pandemic ", "dispose of ", "solid ", "crew ", "secured ", "sales representative ", "tub ", "oversized ", "regulation ", "burst ", "appreciate ", "tower ", "stillness ", "tremble ", "snap around ", "play a trick ", "ghostly ", "pound ", "glow ", "basement ", "dreadful ", "creep over ", "ball ", "fancy ", "carnival ", "stuck ", "crash into ", "overjoyed ", "triumphantly ", "bow ", "porch ", "yawn ", "dew ", "scent ", "drip ", "dim ", "slip away ", "exposure ", "run through ", "faith ", "mess up ", "run through ", "correct ", "in succession ", "worked up ", "give in ", "be a bundle of nerves ", "set oneself up for ", "regardless of ", "dedicated ", "industrious ", "productivity ", "priority ", "direct ", "linear ", "figurative ", "marginalize ", "miss out on ", "neurobiological ", "standpoint ", "recontextualize ", "previously ", "invisible ", "engage ", "mode ", "stimulate ", "association ", "neural ", "node ", "engagement ", "reimagine ", "exercise ", "fuel ", "temporary ", "restore ", "discipline ", "inherent ", "maladaptive ", "predatory ", "capitalism ", "monument ", "triumph ", "critical ", "thoughtless ", "secure ", "pretender to wisdom ", "shame ", "defeat ", "argument ", "literally ", "opponent ", "descendant ", "ownership ", "countersignalling ", "a point of honour ", "trainers ", "tech ", "status ", "atypical ", "regard ", "assistant ", "high end ", "rate ", "fur ", "relativity ", "fundamental ", "principle ", "make the point that ", "status ", "measure ", "relative to ", "analysis ", "extraordinary ", "reveal ", "disappointment ", "perceive ", "better off ", "automation ", "appeal to ", "eager ", "misguided ", "release ", "perceive ", "diminish ", "present ", "engagement ", "consist of ", "prescribed ", "analyst ", "restrict ", "turn into ", "routine ", "take over ", "time consuming ", "engage in ", "valid ", "eye opening ", "sound ", "anecdote ", "exaggeration ", "manipulate ", "navigator ", "preconceived ", "notion ", "curse ", "megadose ", "promote ", "cup of tea ", "abound ", "consequence ", "erase ", "impatient ", "crisis ", "mindful ", "negatively ", "affect ", "complicated ", "substantial ", "imbalance ", "premise ", "opponent ", "prompt ", "mess up ", "choke ", "thigh ", "current ", "severely ", "attachment ", "toss ", "downstream ", "uncontrollable ", "outcome ", "hopelessly ", "sociotechnical ", "expertise ", "disrupt ", "undertaking ", "statistics ", "existing ", "device ", "integrate ", "take   into account", "institution ", "artifact ", "keep in mind ", "politics ", "promote ", "intend ", "dusty ", "evolving ", "outdated ", "discipline ", "adapt to ", "speedometer ", "accelerate ", "keep pace with ", "presentation ", "matter ", "dress up ", "end up with ", "the vast majority of ", "analysis ", "devote ", "afterthought ", "essential ", "factor in ", "quality ", "accurate ", "conceptualization ", "obesity ", "epidemic ", "self control ", "metaphor ", "capture ", "stimulus ", "artificially ", "unintentionally ", "overconsume ", "excessively ", "societal ", "response ", "proportional ", "perceive ", "appropriate ", "expose ", "explicit ", "preference ", "bare bones ", "overlook ", "advocate ", "sufficiently ", "compelling ", "potential ", "attractiveness ", "self apparent ", "projection ", "return ", "thereby ", "alienate ", "distrust ", "deal making ", "resemble ", "venture capitalist ", "corporation ", "reward ", "budget ", "profit ", "radical ", "outcome ", "appetite ", "overdose ", "explicitly ", "implicitly ", "measurement ", "mute ", "optimally ", "deserted island ", "rub ", "emerge ", "vanish ", "immediately ", "activate ", "grant ", "option ", "limited ", "in accord with ", "violate ", "amused ", "assumption ", "longevity ", "reverse ", "life expectancy ", "symptom ", "prolong ", "accomplish ", "vanity ", "enormous ", "superficial ", "inefficient ", "glimpse ", "extend ", "unprecedented ", "alert ", "underway ", "miraculous ", "prediction ", "breakthrough ", "trigger ", "guarantee ", "humanitarian ", "legal ", "collaboration ", "ongoing ", "exploration ", "literally ", "concept ", "ecological ", "implication ", "inform ", "investigate ", "modification ", "advance ", "boundary ", "manipulate ", "genetic ", "make up ", "productivity ", "organism ", "purchase ", "section ", "crop up ", "trendy ", "subcontracted ", "offshoring ", "catch on ", "remarkable ", "enviable ", "conceive ", "domestically ", "deep learning ", "carry out ", "implications ", "analyst ", "bias ", "neural network ", "representation ", "reproduce ", "assumption ", "reflection ", "perception ", "precisely ", "fresh out of school ", "turn around ", "initiative ", "lose lose ", "school district ", "recognize ", "prior ", "take action ", "confidence ", "hinder ", "progress ", "inhibit ", "impose ", "boundary ", "intuitive ", "association ", "diagnosis ", "explicit ", "procedure ", "pin down ", "side effect ", "henceforth ", "collaboration ", "formalizable ", "affect ", "available ", "independent ", "committee ", "federal ", "publicly ", "respondent ", "occupation ", "mathematical ", "chemist ", "peak ", "surpass ", "share ", "transaction ", "dominate ", "exceed ", "forest area ", "account for ", "constitute ", "combine ", "estimate ", "scale ", "squid ", "octopus ", "fossil ", "fin ", "crawl ", "rotate ", "belly ", "electrical field ", "prey ", "location ", "reproduction ", "live young ", "diameter ", "develop ", "reproductive tract ", "apparently ", "commit oneself to ", "qualify ", "tailor ", "involved with ", "psychoanalytical ", "society ", "put on hold", "pioneering ", "authorities ", "emigrate ", "take up ", "professorship ", "illustrator ", "influential ", "artwork ", "illustration ", "entry ", "medium ", "contestant ", "retain ", "publication ", "vending machine ", "interactive ", "feed ", "nurturing ", "recommend ", "outfit ", "instruction ", "nap ", "rock ", "pose ", "safety hazard ", "intend for ", "renewal ", "ceremony ", "root crop ", "in attendance ", "extend ", "forehead ", "immigrant ", "ritual ", "priest ", "lay ", "enlightenment ", "paste ", "ash ", "clay ", "sect ", "horizontal ", "bisect ", "vertical ", "jewelry ", "come up with ", "appreciate ", "log ", "submit ", "rental ", "private ", "organization ", "reservation ", "fee ", "in advance ", "accept ", "register ", "cancellation ", "notice ", "no later than ", "prior to ", "refund ", "geared toward ", "remotely ", "registration ", "sign up for ", "repetition ", "acquire ", "effectively ", "relate ", "perspective ", "comparison ", "determine ", "feature ", "phenomenon ", "primary ", "prevention ", "occur ", "secondary ", "emphasize ", "identify ", "detect ", "treatment ", "outcome ", "curative ", "plentiful ", "prescribe ", "manage ", "significant ", "remedy ", "compensate ", "in proportion to ", "damages ", "assumption ", "correction ", "unintended ", "adoption ", "penalize ", "hypothetical ", "degrade ", "weaken ", "in good faith ", "architectural ", "billing rate ", "standpoint ", "agreement ", "charge ", "terms ", "checkbook ", "inefficient ", "bring   to the table", "negotiator ", "overestimate ", "bias ", "perception ", "normally ", "pay attention to ", "be conscious of ", "analogy ", "prehistoric ", "artifact ", "meteorite ", "accepted ", "populate ", "manufacture ", "construct ", "realization ", "in distinction to ", "current ", "neurological ", "transplantation ", "consist of ", "regenerate ", "relatively ", "procedure ", "explore ", "treatment ", "stroke ", "significant ", "proper ", "circuit ", "oppose ", "religious ", "philosophical ", "emerge ", "natural selection ", "primarily ", "implications ", "immense ", "evolve ", "artificial ", "civilization ", "by now ", "essentially ", "trivial ", "unsustainable ", "crash ", "soft landing ", "utopian ", "restriction ", "go along with ", "the Depression ", "federal government ", "explode ", "expand ", "formula ", "convince ", "prescription drug ", "govern ", "applied ", "uncover ", "concept ", "theory ", "stimulate ", "category ", "manipulate ", "arouse ", "considerable ", "criticism ", "demonstrate ", "effectiveness ", "critic ", "controllable ", "variable ", "fund ", "promote ", "establish ", "regional ", "committee ", "separation ", "breed ", "dialect ", "boundary ", "border ", "a stone’s throw ", "local ", "determine ", "globally ", "bathing costume ", "first and foremost ", "unsuitable ", "cognitively ", "take advantage of ", "insight ", "locational ", "reference ", "moral ", "component ", "elegance ", "festive ", "flexible ", "uphold ", "bourgeois ", "maintain ", "centrally ", "secondary ", "be predicated (up)on", "assumption ", "sacred ", "cornerstone ", "challenge ", "invalidate ", "dominance hierarchy ", "formalized ", "codified ", "dissolve ", "eliminate ", "self righteous ", "superiority ", "intelligentsia ", "intellectual ", "trace to ", "merchant ", "shoemaker ", "worldly ", "scholarly ", "injustice ", "remedy ", "trick ", "theft ", "norm ", "hold   in check", "temper ", "assault ", "aggressively ", "inhibit ", "continual ", "a stream of ", "more often than not ", "aggression ", "portray ", "alter ", "inhibition ", "gradual ", "wear down ", "ecologist ", "megaherbivore ", "rhinoceros", "hippopotamus", "massive ", "immune to ", "predator ", "vulnerable to ", "slow breeding ", "be doomed ", "prey ", "sustain ", "bag ", "let up ", "observation ", "factor ", "determine ", "stationary ", "apart from ", "turn on axis ", "on a daily basis ", "interpret ", "in the light of ", "theory ", "inadequate ", "self esteem ", "considerable ", "route ", "undeniable ", "immaturity ", "resolution ", "verbally ", "thereby ", "pro  ", "set the stage for ", "engaging ", "entertaining ", "identify ", "tightly ", "be at home in ", "sermon ", "monologue ", "feature story ", "lead ", "illustration ", "scattered ", "manuscript ", "insert ", "statistics ", "compelling ", "perceived ", "postindustrial ", "infrastructure ", "manipulation ", "paradoxical ", "displacement ", "concise ", "inevitable ", "visualize ", "exploit ", "consume ", "extensively ", "arguably ", "revolution ", "fluid ", "extra cellular ", "blood sugar level ", "liver ", "storage ", "provision ", "stimulate ", "inhibit ", "adjust ", "concentration ", "constant ", "go about ", "effortlessly ", "apparent ", "simplicity ", "illusion ", "vision ", "complicated ", "conscious mind ", "harvest ", "manufacture ", "container ", "interpretation ", "concern with ", "object ", "rocket science ", "overestimate ", "rate ", "in detail ", "revisit ", "subject ", "lower ", "rating ", "perform ", "sketch out ", "striking ", "phenomenon ", "illusion ", "explanatory ", "alter ", "disability ", "point out ", "constantly ", "sequence ", "sensory ", "orienting response ", "perceptual ", "shortening ", "attention span ", "novel ", "give in to ", "passive ", "analyze ", "evenly ", "distribute ", "put   aside", "direct ", "domestic ", "rarely ", "observe ", "pasture ", "gauge ", "display ", "aggressive ", "preferred ", "settle a score ", "counteract ", "boredom ", "dominance ", "dispute ", "conflict ", "result in ", "replacement ", "adjust ", "interpretation ", "stand for ", "equate ", "statement ", "immediate ", "cognitive ", "obvious ", "gravity ", "dominate ", "dynamics ", "overcome ", "resistance ", "descend ", "surrender ", "passive ", "compliance ", "unevenness ", "location ", "dynamically ", "potential energy ", "mass ", "vertical ", "obtain ", "experimental ", "demonstration ", "with regard to ", "mention ", "invariably ", "convince oneself that ", "navigate ", "sail ", "crew ", "significant ", "decent ", "determine ", "precisely ", "essential ", "reflection ", "graphically ", "representation ", "shoreline ", "wording ", "neutral ", "tailor ", "personality ", "tutor ", "be reluctant to do ", "contribution ", "face threatening ", "confidence ", "supportive ", "empathic ", "ambitious ", "artificial ", "adaptation ", "prejudice ", "inform ", "unjust ", "discrimination ", "acknowledge ", "hostile ", "solely ", "merit ", "pose ", "threatening ", "intent ", "subjected to ", "apparently ", "translate into ", "prospects ", "concept ", "precisely ", "millennium ", "publicly ", "in decline ", "conversely ", "digitization ", "convert ", "format ", "advanced ", "distribution ", "innovation ", "contain ", "intent ", "encode ", "cue ", "dynamic ", "above chance", "refine ", "patron ", "intention ", "appreciate ", "isolated ", "reaction ", "take pains ", "concerning ", "framing ", "presentation ", "for the benefit of ", "particular ", "lighting ", "judgment ", "dimension ", "exposure ", "perception ", "generate ", "approximation ", "with respect to ", "available ", "bring together ", "blend ", "combine ", "account for ", "blindness ", "betrayal ", "poetic ", "tragedy ", "construction ", "distinct ", "overall ", "integration ", "amend ", "interpret ", "contemporary ", "literary ", "attribute ", "dominate ", "lyrics ", "grab ", "phrase ", "minimal ", "distract ", "interpret ", "instrumental music ", "limit ", "pause ", "poetical ", "statement ", "universal ", "indicative of ", "piece ", "sociologist ", "approach ", "long standing ", "argument ", "properly ", "social mobility ", "phenomenon ", "statistically ", "enquire into ", "involved ", "aspire ", "quantitative ", "relaxed ", "indispensable ", "at least ", "as many ", "intensive ", "yield ", "reveal ", "challenging ", "destructive ", "unethical ", "mission ", "summit ", "commit ", "ultimately ", "misrepresent ", "cheat ", "fine ", "unauthorized ", "bring on ", "sensory ", "overload ", "bring on ", "finely ", "spot ", "mechanical ", "superiority ", "overwhelming ", "choice ", "artifact "];
const KoreanVoca = ["자산재산 ", "개선향상시키다", "가상설정", "편안한", "엄선한", "과장된", "하기만하면", "보수개조하다", "간절히원하다", "동봉하다", "튼튼한", "분위기", "신청", "헌신약속", "염려하는관심사", "적절하게", "방해혼란", "촉진승진시키다", "애써노력하다", "느긋한편한", "연장선구내전화", "이해하고친해지다", "후임자대체물", "마땅히받을만하다", "주택의주거의", "세계적인유행병", "처리하다", "고형의고체의", "승무원", "안전한", "영업대표담당자", "욕조통", "너무큰", "규정", "터지다", "감사하다", "위로높이솟다", "정적고요", "떨리다", "휙돌아가다", "눈속이다", "유령같은", "세차게두드리다", "빛나다빛내다", "지하실지하", "굉장히무서운", "공포가엄습하다", "무도회댄스파티", "색깔이화려한", "축제사육제", "꼼짝달싹못하는", "부딪치다충돌하다", "매우기쁜", "위풍당당하게", "인사하다", "현관", "하품하다", "이슬", "향기냄새", "방울져서흐르다", "흐릿한희미한", "사라지다없어지다", "접함노출", "끝까지훑어보다", "믿음", "망치다", "끝까지대충하는연습", "바로잡다", "연속으로", "흥분한", "굴복하다", "신경이곤두서다", "좋지않은상태가되다", "에상관없이", "헌신적인", "근면한", "생산성", "우선순위", "길안내하다", "선형의선적인", "비유적인", "소외시키다", "놓치다", "신경생물학의", "관점", "새로운맥락에적용하다", "이전에", "보이지않는", "사용고용관여시키다", "방식", "자극하다", "연상연관", "신경의", "연결망의교점접합점", "참여관여", "새롭게재해석하다", "발휘하다", "증가시키다", "일시적인임시의", "회복시키다복구하다", "규율통제", "내재하는타고난", "적응하지못하는", "약탈하는탐욕스러운", "자본주의", "기념탑기념물", "승리대성공", "위태로운위험한", "무분별한경솔한", "묶어놓다고정하다", "지혜가있는척하는사람", "창피모욕하다", "패배시키다이기다", "논쟁토론", "그야말로문자그대로", "상대반대자", "자손후예유래한것", "소유", "반대신호보내기", "명예에관한문제", "운동화", "과학기술", "지위", "이례적인격식벗어난", "호감존경", "점원조수", "최고급의", "평가하다", "모피", "상대성", "기본적인", "원칙", "이라는주장하다", "상태지위", "측정하다", "비교하여", "분석", "특별한", "밝히다드러내다", "실망", "여기다인식하다", "상황이더나은", "자동화", "에호소하다", "열렬한간절히바라는", "잘못된오도된", "해방면제", "인식하다지각하다", "감소시키다", "나타내다제시하다", "개입참여", "으로구성되다", "규정된미리정해진", "분석가", "한정하다제한하다", "으로전환하다", "정례적인일", "떠맡다", "시간이걸리는", "하다에참여하다", "타당한유효한", "놀랄만한훌륭한", "괜찮은옳은", "일화", "과장", "조종하다", "정보검색자항해사", "사전에형성된", "개념생각", "저주", "대량투여하다", "조장하다장려하다", "선호하는일", "풍부하다", "결과", "지우다", "성급한", "위기", "염두에두는", "부정적으로", "영향미치다", "복잡한", "상당한", "불균형", "전제", "상대방", "하게하다부추기다", "망치다", "실패하다망치다", "허벅지", "흐름조류", "심하게심각하게", "애착", "뒤흔들다내던지다", "하류로흐름에따라", "통제할수없는", "결과", "대책없이", "사회기술적", "전문지식", "붕괴분열시키다", "사업일", "통계통계학", "현존하는현재의", "기구장치", "통합하다", "고려하다", "제도기관", "인공물가공품", "명심하다", "이해관계정략", "증진활성화시키다", "의도하다생각하다", "먼지투성이의", "진화하는", "시대에뒤떨어진", "학문분야", "에적응하다", "속도계주행기록계", "가속하다", "보조맞추다", "제시발표", "중요하다문제가되다", "꾸미다", "결국가지게되다", "대부분의", "분석", "노력돈시간따위들이다바치다", "나중에덧붙이는것", "필수적인", "고려하다계산에넣다", "양질의", "정확한", "개념화", "비만", "급속한확산유행병", "자제력", "비유", "정확히담아내다", "자극", "인위적으로", "의도치않게", "과다섭취하다", "지나치게", "사회의", "대응반응", "비례하는", "인식하다", "적절한", "접하게하다", "명백한분명한", "선호", "빈약한", "묵살하다간과하다", "주창자옹호자", "충분히", "설득력있는강력한", "가능성이있는잠재적인", "매력끌어당기는힘", "자명한", "추정예상", "수익", "그렇게함으로써", "멀어지게만들다", "불신하다", "거래성립", "유사하다닮다", "벤처사업투자자", "기업", "보상;보상하다", "예산", "이득이익", "급진적인", "결과", "욕구갈망", "과량약의지나친투여", "명시적으로", "암묵적으로", "평가측정", "약화시키다", "최적으로최선으로", "무인도", "문지르다", "나타나다출현하다", "사라지다", "바로즉시", "활성화하다작동하다", "주다수여하다", "선택할수있는것선택권", "얼마안되는제한적인", "부합[일치]하여", "거스르다위반하다", "재미있어하는", "가정추정", "수명장수", "역으로뒤집다", "기대수명", "증상", "연장하다", "이루다성취하다", "허황된것허영심", "막대한", "피상적인", "비효율적인", "언뜻봄흘끗봄", "연장하다", "전례없는", "주의환기하다알리다", "진행중의", "기적적인놀라운", "예견예측", "획기적발전", "유발하다촉발하다", "보장하다약속하다", "인도주의자", "법률의", "협력합작", "계속진행중인", "탐구탐험", "문자그대로그야말로", "개념", "생태상의환경의", "함의영향", "영향미치다", "살피다조사하다", "변형수정", "발전진전", "경계한계", "조작하다속이다", "유전의", "구조구성", "생산능력생산성", "유기체생물", "구매하다", "부분", "불쑥나타나다", "최신유행의", "하청계약된", "생산기지해외이전 ", "인기얻다유행하다", "놀라운놀랄만한", "부러운선망의대상이되는", "구상하다착상하다", "국내에서", "심층기계학습", "수행하다", "결과영향", "분석가", "편향편견", "신경회로망", "표현표시", "재현하다재생하다", "가정전제", "생각반영", "인식지각", "바로정확히", "학교갓졸업한", "호전시키다회복시키다", "진취성결단력주도권", "부정적결과만낳는상황", "학구학군", "깨닫다인식하다", "전의앞의", "행동조치하다", "자신감확신", "가로막다방해하다", "앞으로나아감향상", "저해하다못하게하다", "부과하다강요하다", "한계경계", "직관적인", "연관성연상", "진단", "명시적인", "절차", "정확히밝히다", "뜻하지않은결과부작용", "이후이제부터는", "협업", "공식화가가능한", "영향주다작용하다", "이용할수있는이용가능한", "독자적인독립된", "위원회", "연방의연방제의", "공개적으로공공연하게", "응답자", "직업직종", "수학의", "화학자", "최고조에이르다", "능가하다", "시장점유율", "거래매매", "우위차지하다", "넘다초과하다", "숲면적", "부분비율차지하다", "구성하다", "합하다결합하다", "추정하다", "물고기비늘저울", "오징어", "문어", "화석", "지느러미", "기어다니다기다", "회전하다", "배복부", "전기장", "먹잇감", "찾기위치알아내기", "번식생식", "살아있는부화된새끼", "지름", "알이새끼로발육하다", "생식관", "인것처럼보이는", "하기로맹세약속하다", "자격얻다", "재단사", "에참여하는", "정신분석의", "학회", "잠시중단하다보류하다", "선구적인", "당국", "다른나라로이주하다", "맡다", "교수직", "삽화가", "영향력있는", "삽화", "삽화", "출품작참가작품", "제작재료도구", "참가자", "보유하다", "출판", "자동판매기", "상호작용하는", "먹이주다", "육아", "권장하다추천하다", "옷복장", "사용설명서", "참깐낮잠자다 ", "돌전후좌우로흔들다", "야기하다제기하다", "안전상의위험", "위해만들다", "부활갱신", "의식식", "뿌리작물", "특별한행사에참석하다", "뻗다", "이마", "이민자의", "의식의", "성직자목사", "평신도의", "깨달음", "반죽", "재", "점토", "종파분파", "수평의", "이등분하다", "수직의", "보석류", "떠올리다생각해내다", "높이평가하다", "일지에기록하다", "제출하다", "대여", "사적인개인전용의", "협회조직", "예약", "요금", "미리", "받아들이다", "등록하다", "취소", "통보", "늦어도까지는", "보다앞서", "환불", "에맞도록구성된", "원격으로", "등록", "에등록하다", "반복", "습득하다", "효과적으로", "관련시키다관련이있다", "관점", "비교", "결정하다", "특징", "현상", "첫번째로", "예방", "발생하다", "두번째로", "강조하다", "발견하다찾아내다", "발견하다찾아내다", "치료", "결과", "치료의", "많은", "처방하다", "관리하다", "상당한", "수습하다바로잡다", "보상하다", "비례하여", "손해액", "가정", "수정교정", "의도치않은", "채택", "불리하게처벌하다", "가상의", "저하시키다", "약화시키다", "옳다고믿으며선의로", "건축의", "청구요금", "입장관점", "계약서", "비용청구하다", "조건들", "수표책", "비효율적인", "제공하다제시하다", "협상가", "과대평가하다", "편향성향", "인식지각", "보통의경우흔히", "에주목하다", "의식하다알고있다", "유사성유추", "선사시대의", "인공물공예품", "운석", "인정된용인된", "거주하다살다", "제작하다만들다", "구성생각해내다", "깨달음인식", "구별하여", "현재의", "신경학의신경의", "이식", "으로구성되다", "재생하다", "비교적", "방법절차수술", "탐구하다", "치료법", "뇌졸중", "중요한", "제대로된적절한", "회로", "반대하다", "종교적인", "철학적인", "나오다등장하다", "자연선택", "주로본래", "영향결과", "엄청난거대한", "진화하다", "인위적인인위의", "문명", "이제는이미", "기본적으로", "변변치않은사소한", "지속가능하지않은", "추락하다충돌하다", "연착륙", "몽상적인이상향의", "제약제한", "에동조하다찬성하다", "대공황기세계대공황", "연방정부", "폭발적으로증가하다", "확대확장하다", "방식공식", "납득수긍하게하다", "처방약", "지배하다통치하다", "실용적인응용된", "밝히다", "개념", "이론", "장려하다자극하다", "범주", "조종하다", "불러일으키다", "상당한", "비판", "입증하다", "효과", "비판하는사람비평가", "통제할수있는", "변수변인", "자금대다", "홍보하다", "확립하다수립하다", "지역적인", "위원회", "분리격리", "낳다만들어내다", "방언사투리", "경계선", "경계국경", "매우가까운거리", "지역의", "결정하다", "포괄적전반적으로", "수영복", "무엇보다", "부적절한", "인지적으로지각력있게", "이용하다", "통찰력이해", "장소의입지의", "관련참고", "도덕적인", "요소성분", "우아함고상", "축제다운축제의", "유연한융통성있는", "옹호지지유지하다", "중산층의", "유지하다가지다", "핵심적으로", "이차적인", "에근거하다", "가정", "신성한", "초석토대", "도전문제", "틀렸음입증무효", "지배위계순위제", "형식화된", "법전으로편찬된", "소실되다없어지다", "없애다제거하다", "독선적인", "우월", "지식계급", "지식인", "추적하여밝혀내다", "상인", "제화업자", "세속적인", "학문하는학자의", "부당함", "바로잡다", "속임수", "도둑질", "규범", "억제하다", "화노여움", "폭행하다공격하다", "공격적으로적극적으로", "억제하다", "연속적인계속되는", "연속되는일련의", "대개흔히", "공격", "묘사하다", "바꾸다변경하다", "억제금지", "점차적인", "약화되다마모되다", "생태학자", "초대형초식동물", "코뿔소", "하마", "거대한", "의영향받지않는", "포식자", "에취약한", "느리게번식하는", "불행한운명을맞다", "사냥감먹잇감", "부양생계유지하다", "잡다죽이다", "강도가약해지다", "관찰", "요인", "결정하다", "정지된", "은제외하고", "축중심으로돌다", "매일", "해석이해설명하다", "의관점에서", "이론", "충분하지않은", "자존감자부심", "상당한적지않은", "길방법", "부인하기어려운명백한", "미성숙미발달", "해답결의", "말로구두로", "그렇게함으로써", "에친화적인지지하는", "발판을마련하다", "매력있는", "재미있는", "찾다발견하다", "간결하게극히압축하여", "편안하게하다", "설교", "독백", "특집기사주요한읽거리", "신문기사의첫머리", "예화", "흩어져있는", "원고", "집어넣다삽입하다", "통계자료통계통계학", "흥미진진한흥미돋우는", "인식된감지된지각된", "산업화이후의", "기반시설", "조작", "역설적인", "대체치환이동", "간결한", "불가피한", "시각화하다", "이용하다", "소비하다", "광범위하게", "아마틀림없이", "혁명", "체액", "세포외의", "혈당치", "간", "저장", "공급", "자극하다", "억제하다", "맞추다조정하다", "농도", "일정한", "시작하다", "쉽게노력하지않고", "외견상의겉보기에는", "간단함평이함", "착각오해", "시각시야", "복잡한", "의식", "수확하다", "제조생산", "용기그릇", "해석이해", "관심갖고관여하다", "물건물체", "이해하기어려운것", "과대평가하다", "평가하다", "자세히", "다시논의하다", "실험대상자", "낮추다", "평점등급", "수행하다", "대략그리다", "놀라운", "현상", "착각환상", "설명의", "바꾸다", "장애", "주목언급하다", "끊임없이", "연속된한장면", "감각의", "느끼게반응만들기", "지각력의", "단축", "주의지속시간", "신기한새로운", "에굴복하다", "수동적인", "분석하다", "균등하게고르게", "분배하다나누다", "제쳐놓다무시하다", "지배하다지시하다", "사육되는길들여진", "하는경우가거의없는", "관찰하다", "목초지초원", "측정하다추정하다", "과시하다;과시", "공격적인", "우선선취권이있는", "분풀이설욕하다", "대응반작용하다", "지루함", "지배권우세", "싸움논쟁", "충돌갈등", "초래하다", "대체물", "적응시키다순응시키다", "해석이해", "나타내다의미하다", "같은것으로생각하다", "말함진술", "당면한즉각적인", "인지의인식의", "분명한명백한", "중력", "지배하다", "역학관계역학", "이겨내다극복하다", "저항저항력", "내려가다", "굴복하다항복하다", "수동적무저항의", "순응수락", "불균형고르지않음", "위치", "역학적으로", "위치에너지", "덩어리질량", "수직의세로의", "얻다구하다", "실험의", "증명증거", "관련하여에대해", "언급하다말하다", "예외없이언제나", "이라는것납득하다", "항해하다길찾다", "배로항해하다", "선원승무원", "의미있는중요한", "제법괜찮은제대로된", "측정하다결정하다", "정확하게", "본질적인근본적인", "반영", "도표상으로", "표현표상묘사", "해안선", "표현법용어", "중립적인", "맞추다조정하다", "성격개성", "지도교사강사", "꺼리다주저하다", "의견발언기여", "체면손상하는", "자신감", "힘주는지지하는", "공감할수있는감정이입의", "의욕적인야심있는", "인위적인거짓된", "조정적응", "편견선입견", "알리다통지하다", "부당한", "차별", "인정하다", "적대적인", "오로지", "장점", "제기하다", "위협적인", "의도", "겪는당하는", "겉보기에", "으로해석되다", "성공기회성공가능성", "개념", "정확하게", "천년간", "공개적으로", "쇠퇴하여기울어", "반대로거꾸로", "디지털화", "전환하다개조하다", "형태체재", "진보한발달한", "배포유통", "혁신쇄신", "담고있다포함하다", "의도", "표현하다", "단서신호", "역동적인활발한", "우연의확률넘는", "개선하다다듬다", "후원자고객", "의도", "감상하다", "고립된", "반응", "공들이다애쓰다", "에관하여[관한]", "구성고안", "표현제시", "위하여", "세심한꼼꼼한", "명암조명", "판단", "요인차원", "노출", "지각인식", "생성하다", "비슷한가까운근사치", "에관해서", "구할수있는", "합치다", "섞다", "결합하다", "설명하다", "맹목", "배신", "시적인", "비극", "구성", "두드러지는", "전체적인", "통합", "수정하다", "해석하다", "당대의", "문학의", "속성", "지배하다", "가사", "가로채다붙잡다", "구절", "극미한최소한의", "분산시키다흩뜨리다", "해석하다", "기악", "제한하다", "잠시끊김중지", "시적인시로쓰인", "진술", "보편적인", "나타내는", "악곡작품", "사회학자", "접근법연구법", "오랜", "논쟁", "제대로적절히", "사회이동", "현상", "통계상으로", "조사하다", "관련된", "열망하다", "정량적인양적인", "관대한느긋한", "매우필요한", "최소한적어도", "그만큼많은", "집중적인", "가져오다산출하다", "드러내다밝히다", "어려운도전적인", "해로운파괴적인", "비윤리적인", "임무아주힘든과제", "정상에이르다", "전념하다헌신하다", "결국궁극적으로", "왜곡하다잘못전하다", "속임수쓰다", "벌금부과하다", "승인되지않은", "야기하다초래하다", "감각의", "과부하", "야기하다초래하다", "정교하게아름답게", "알아차리다발견하다", "수작업의", "우월성", "압도적인", "선택;고급의", "공예품"];
const Korean = [];
let fallingPiece;
let gridPieces = [];
let lineFades = [];
let gridWorkers = [];
let currentScore = 0;
let linesCleared = 0;
let ticks = 0;
let updateEvery = 15;
let updateEveryCurrent = 15;
let fallSpeed = gridSpace * 0.5;
let pauseGame = false;
let gameOver = false;
const gameEdgeLeft = 0;
const gameEdgeRight = 410;
const colors = ["#dca3ff", "#ff90a0", "#80ffb4", "#ff7666", "#70b3f5", "#b2e77d", "#ffd700"];
let generatedNumbers = [];

const dropSound = new Audio('sounds/kk.wav');
const clearSound = new Audio('sounds/cl.mp3');

function generateRandomUniqueNumber(min, max) {
    let number;
    do {
        number = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (generatedNumbers.includes(number));
    generatedNumbers.push(number);
    return number;
}

let gameCanvas;
let gameContainer;

function setup() {
    gameContainer = document.getElementById('game-container');
    gameCanvas = createCanvas(600, 600);
    gameCanvas.parent(gameContainer);
    fallingPiece = new PlayPiece();
    fallingPiece.resetPiece();
    textFont('Press Start 2P');
    dropSound.addEventListener('canplaythrough', event => {
        console.log('Drop sound loaded successfully.');
    });
    clearSound.addEventListener('canplaythrough', event => {
        console.log('Clear sound loaded successfully.');
    });
}

function draw() {
    background("#000");
    fallingPiece.showShadow();
    fallingPiece.show();
    const colorDark = "#0d0d0d";
    const colorLight = "#fff";
    const colorGold = "#e6ce78";
    const colorBoder = "#e87302";
    const colorBackground = "#000";
    const colorBackground1 = "#522714";
    background(colorBackground);
    fill(25);
    noStroke();
    rect(gameEdgeRight, 0, 180, height);
    rect(0, 0, gameEdgeLeft, height);
    fill(colorBackground);
    rect(430, 50, 140, 35, 5, 5);
    rect(430, 130, 140, 35, 5, 5);
    fill(colorBackground1);
    rect(420, 290, 160, 80, 5, 5);
    rect(420, 380, 160, 80, 5, 5);
    rect(420, 500, 160, 80, 5, 5);
    strokeWeight(2);
    noFill();
    stroke(colorGold);
    rect(430, 130, 140, 35, 100, 100);
    fill(colorGold);
    noStroke();
    textSize(18);
    textAlign(CENTER);
    text("LINES", 500, 40);
    text("SCORE", 500, 120);
    text("NEXT", 500, 280);
    text("HOLD", 500, 490);
    textSize(18);
    textAlign(CENTER);
    fill(colorLight);
    text(linesCleared, 500, 75);
    text(currentScore, 500, 155);
    stroke(colorDark);
    fallingPiece.showShadow();
    fallingPiece.show();
    if (keyIsDown(DOWN_ARROW)) {
        updateEvery = 2;
    } else {
        updateEvery = updateEveryCurrent;
    }
    if (!pauseGame) {
        ticks++;
        if (ticks >= updateEvery) {
            ticks = 0;
            fallingPiece.fall(fallSpeed);
        }
    }
    for (let i = 0; i < gridPieces.length; i++) {
        gridPieces[i].show();
    }
    for (let i = 0; i < lineFades.length; i++) {
        lineFades[i].show();
    }
    if (gridWorkers.length > 0) {
        gridWorkers[0].work();
    }
    if (gameOver) {
        fill(colorLight);
        textSize(50);
        textAlign(CENTER);
        text("Game Over!", 300, 320);
    }
    strokeWeight(3);
    stroke("#304550");
    noFill();
    rect(0, 0, width, height);
    stroke(colorBoder);
    strokeWeight(15);
    noFill();
    rect(0, 0, width, height);
}

function keyPressed() {
    if (keyCode === 82) {
        resetGame();
    }
    if (!pauseGame) {
        if (keyCode === LEFT_ARROW) {
            fallingPiece.input(LEFT_ARROW);
        } else if (keyCode === RIGHT_ARROW) {
            fallingPiece.input(RIGHT_ARROW);
        }
        if (keyCode === UP_ARROW) {
            fallingPiece.input(UP_ARROW);
        }
    }
}

function leftGame() {
    if (!pauseGame) {
        fallingPiece.input(LEFT_ARROW);
    }
}

function rightGame() {
    if (!pauseGame) {
        fallingPiece.input(RIGHT_ARROW);
    }
}

function upGame() {
    if (!pauseGame) {
        fallingPiece.input(UP_ARROW);
    }
}

function downGame() {
    if (!pauseGame) {
        fallingPiece.fall(fallSpeed * 1);
    } else {
        updateEvery = updateEveryCurrent;
    }
}

function stopGame() {
    pauseGame = true;
}

function speakText(msgeng) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = msgeng;
    msg.lang = 'en-US';
    msg.rate = 0.5;
    window.speechSynthesis.speak(msg);
}

function speakText2(msgeng) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = msgeng;
    msg.lang = 'ko-KR';
    msg.rate = 0.8;
    window.speechSynthesis.speak(msg);
}

function addVocabulary2(randomNumber1, randomNumber2) {
    var list = document.getElementById("word-list");
    var newEntry = document.createElement("li");
    newEntry.innerHTML = `<button class="custom-buttontext" onclick="speakText('${Englishvoca[randomNumber1 % Englishvoca.length]}')">${Englishvoca[randomNumber1 % Englishvoca.length]}</button> <button class="custom-buttontext2" onclick="speakText2('${KoreanVoca[randomNumber1 % KoreanVoca.length]}')">${KoreanVoca[randomNumber1 % KoreanVoca.length]}</button>`;
    list.insertBefore(newEntry, list.firstChild);
}

function resetGame() {
    currentScore = 0;
    linesCleared = 0;
    gameOver = false;
    pauseGame = false;
    ticks = 0;
    updateEvery = 15;
    updateEveryCurrent = 15;
    fallSpeed = gridSpace * 0.5;
    gridPieces = [];
    lineFades = [];
    gridWorkers = [];
    fallingPiece = new PlayPiece();
    fallingPiece.resetPiece();
    var wordList = document.getElementById("word-list");
    wordList.innerHTML = "";
    draw();
}

function startGame() {
    if (gameOver) {
        resetGame();
    } else {
        pauseGame = false;
    }
}

class PlayPiece {
    constructor() {
        this.pos = createVector(0, 0);
        this.rotation = 0;
        this.nextPieceType = Math.floor(Math.random() * 7);
        this.nextPieces = [];
        this.pieces = [];
        this.pieceType = 0;
        this.orientation = [];
        this.fallen = false;
        this.nextPieceQueue = [];
        this.holdPieces = [];
        this.holdPieceType = Math.floor(Math.random() * 7);
    }
    holdPiece() {
        this.holdPieceType = this.pieceType;
        this.holdPieces = [];
        const points = orientPoints(this.holdPieceType, 0);
        let xx = 500, yy = 540;
        if (this.holdPieceType !== 0 && this.holdPieceType !== 3 && this.holdPieceType !== 5) {
            xx += (gridSpace * 0.5);
        }
        if (this.holdPieceType == 5) {
            xx -= (gridSpace * 0.5);
        }
        for (let i = 0; i < 4; i++) {
            this.holdPieces.push(new Square(xx + points[i][0] * gridSpace, yy + points[i][1] * gridSpace, this.holdPieceType));
        }
    }
    nextPiece() {
        if (this.nextPieceQueue.length === 0) {
            this.nextPieceQueue.push(pseudoRandom(this.pieceType));
            this.nextPieceQueue.push(pseudoRandom(this.nextPieceQueue[0]));
        }
        this.pieceType = this.nextPieceQueue.shift();
        this.nextPieceQueue.push(pseudoRandom(this.nextPieceQueue[this.nextPieceQueue.length - 1]));
        this.nextPieces = [];
        const nextPieceType1 = this.nextPieceQueue[0];
        const points1 = orientPoints(nextPieceType1, 0);
        let xx1 = 500, yy1 = 330;
        if (nextPieceType1 !== 0 && nextPieceType1 !== 3 && nextPieceType1 !== 5) {
            xx1 += (gridSpace * 0.5);
        }
        if (nextPieceType1 == 5) {
            xx1 -= (gridSpace * 0.5);
        }
        for (let i = 0; i < 4; i++) {
            this.nextPieces.push(new Square(xx1 + points1[i][0] * gridSpace, yy1 + points1[i][1] * gridSpace, nextPieceType1));
        }
        const nextPieceType2 = this.nextPieceQueue[1];
        const points2 = orientPoints(nextPieceType2, 0);
        let xx2 = 500, yy2 = 420;
        if (nextPieceType2 !== 0 && nextPieceType2 !== 3 && nextPieceType2 !== 5) {
            xx2 += (gridSpace * 0.5);
        }
        if (nextPieceType2 == 5) {
            xx2 -= (gridSpace * 0.5);
        }
        for (let i = 0; i < 4; i++) {
            this.nextPieces.push(new Square(xx2 + points2[i][0] * gridSpace, yy2 + points2[i][1] * gridSpace, nextPieceType2));
        }
    }

    fall(amount) {
        if (!this.futureCollision(0, amount, this.rotation)) {
            this.addPos(0, amount);
            this.fallen = true;
        } else {
            if (!this.fallen) {
                pauseGame = true;
                gameOver = true;
            } else {
                dropSound.play();
                this.commitShape();
            }
        }
    }

    resetPiece() {
        this.rotation = 0;
        this.fallen = false;
        this.pos.x = 210;
        this.pos.y = -60;
        this.pieceType = this.nextPieceType;
        this.nextPiece();
        this.newPoints();
        this.holdPiece();
    }

    newPoints() {
        const points = orientPoints(this.pieceType, this.rotation);
        this.orientation = points;
        this.pieces = [];
        for (let i = 0; i < points.length; i++) {
            this.pieces.push(new Square(this.pos.x + points[i][0] * gridSpace, this.pos.y + points[i][1] * gridSpace, this.pieceType));
        }
    }

    updatePoints() {
        if (this.pieces) {
            const points = orientPoints(this.pieceType, this.rotation);
            this.orientation = points;
            for (let i = 0; i < 4; i++) {
                this.pieces[i].pos.x = this.pos.x + points[i][0] * gridSpace;
                this.pieces[i].pos.y = this.pos.y + points[i][1] * gridSpace;
            }
        }
    }

    addPos(x, y) {
        this.pos.x += x;
        this.pos.y += y;
        if (this.pieces) {
            for (let i = 0; i < 4; i++) {
                this.pieces[i].pos.x += x;
                this.pieces[i].pos.y += y;
            }
        }
    }

    futureCollision(x, y, rotation) {
        let xx, yy, points = 0;
        if (rotation !== this.rotation) {
            points = orientPoints(this.pieceType, rotation);
        }
        for (let i = 0; i < this.pieces.length; i++) {
            if (points) {
                xx = this.pos.x + points[i][0] * gridSpace;
                yy = this.pos.y + points[i][1] * gridSpace;
            } else {
                xx = this.pieces[i].pos.x + x;
                yy = this.pieces[i].pos.y + y;
            }
            if (xx < gameEdgeLeft || xx + gridSpace > gameEdgeRight || yy + gridSpace >= height - 1) {
                return true;
            }
            for (let j = 0; j < gridPieces.length; j++) {
                if (xx === gridPieces[j].pos.x) {
                    if (yy >= gridPieces[j].pos.y && yy < gridPieces[j].pos.y + gridSpace) {
                        return true;
                    }
                    if (yy + gridSpace > gridPieces[j].pos.y && yy + gridSpace <= gridPieces[j].pos.y + gridSpace) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    input(key) {
        switch (key) {
            case LEFT_ARROW:
                if (!this.futureCollision(-gridSpace, 0, this.rotation)) {
                    this.addPos(-gridSpace, 0);
                }
                break;
            case RIGHT_ARROW:
                if (!this.futureCollision(gridSpace, 0, this.rotation)) {
                    this.addPos(gridSpace, 0);
                }
                break;
            case UP_ARROW:
                let newRotation = this.rotation + 1;
                if (newRotation > 3) {
                    newRotation = 0;
                }
                if (!this.futureCollision(0, 0, newRotation)) {
                    this.rotation = newRotation;
                    this.updatePoints();
                }
                break;
        }
    }

    rotate() {
        this.rotation += 1;
        if (this.rotation > 3) {
            this.rotation = 0;
        }
        this.updatePoints();
    }

    show() {
        for (let i = 0; i < this.pieces.length; i++) {
            this.pieces[i].show();
        }
        for (let i = 0; i < this.nextPieces.length; i++) {
            this.nextPieces[i].show();
        }
        for (let i = 0; i < this.holdPieces.length; i++) {
            this.holdPieces[i].show();
        }
    }

    showShadow() {
        let shadowY = this.pos.y;
        while (true) {
            let collision = false;
            for (let i = 0; i < this.pieces.length; i++) {
                if (this.futureCollision(0, shadowY - this.pos.y + gridSpace, this.rotation, i)) {
                    collision = true;
                    break;
                }
            }
            if (collision) {
                break;
            }
            shadowY += gridSpace;
            if (shadowY + gridSpace > height) {
                break;
            }
        }
        for (let i = 0; i < this.pieces.length; i++) {
            fill(255);
            stroke(25);
            strokeWeight(2);
            drawingContext.globalAlpha = 0.15;
            let pieceX = this.pieces[i].pos.x;
            let pieceY = shadowY + (this.pieces[i].pos.y - this.pos.y);
            rect(pieceX, pieceY, gridSpace, gridSpace);
            drawingContext.globalAlpha = 1;
        }
    }

    commitShape() {
        for (let i = 0; i < this.pieces.length; i++) {
            gridPieces.push(this.pieces[i]);
        }
        const randomNumber1 = generateRandomUniqueNumber(0, 1000);
        addVocabulary2(randomNumber1, randomNumber1);
        speakText(Englishvoca[randomNumber1 % Englishvoca.length]);
        setTimeout(function () {
            speakText2(KoreanVoca[randomNumber1 % KoreanVoca.length]);
        }, 2000);
        setTimeout(function () {
            startGame();
        }, 3000);
        this.resetPiece();
        analyzeGrid();
    }
}

class Square {
    constructor(x, y, type) {
        this.pos = createVector(x, y);
        this.type = type;
    }

    show() {
        const baseColor = color(colors[this.type]);
        const outerColor = lerpColor(baseColor, color(0, 0, 0), 0.4); 
        const centerColor = lerpColor(baseColor, color(255, 255, 255), 0.05);

        // Vẽ ô vuông với màu viền ngoài mờ
        fill(outerColor);
        stroke(255); // Viền trắng
        strokeWeight(0.8); // Độ dày viền
        rect(this.pos.x, this.pos.y, gridSpace, gridSpace);

        // Hiệu ứng gradient cho viền ngoài
        for (let i = 1; i <= 10; i++) {
            let interpColor = lerpColor(outerColor, baseColor, i * 0.2);
            fill(interpColor);
            noStroke();
            rect(this.pos.x + i, this.pos.y + i, gridSpace - 2 * i, gridSpace - 2 * i);
        }

        // Vẽ màu trung tâm sáng hơn
        fill(centerColor);
        noStroke();
        rect(this.pos.x + 5, this.pos.y + 5, gridSpace - 10, gridSpace - 10);
    }
}

function pseudoRandom(previous) {
    let roll = Math.floor(Math.random() * 8);
    if (roll === previous || roll === 7) {
        roll = Math.floor(Math.random() * 7);
    }
    return roll;
}

function analyzeGrid() {
    let score = 0;
    while (checkLines()) {
        score += 100;
        linesCleared += 1;
        if (linesCleared % 10 === 0) {
            if (updateEveryCurrent > 2) {
                updateEveryCurrent -= 10;
            }
        }
        clearSound.play();
    }
    if (score > 100) {
        score *= 2;
    }
    currentScore += score;
}

function checkLines() {
    for (let y = 0; y < height; y += gridSpace) {
        let count = 0;
        for (let i = 0; i < gridPieces.length; i++) {
            if (gridPieces[i].pos.y === y) {
                count++;
            }
        }
        if (count === 20) {
            gridPieces = gridPieces.filter(piece => piece.pos.y !== y);
            for (let i = 0; i < gridPieces.length; i++) {
                if (gridPieces[i].pos.y < y) {
                    gridPieces[i].pos.y += gridSpace;
                }
            }
            return true;
        }
    }
    return false;
}

class Worker {
    constructor(y, amount) {
        this.amountActual = 0;
        this.amountTotal = amount;
        this.yVal = y;
    }

    work() {
        if (this.amountActual < this.amountTotal) {
            for (let j = 0; j < gridPieces.length; j++) {
                if (gridPieces[j].pos.y < this.yVal) {
                    gridPieces[j].pos.y += 5;
                }
            }
            this.amountActual += 5;
        } else {
            gridWorkers.shift();
        }
    }
}
