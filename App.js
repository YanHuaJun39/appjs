import React, { Component } from 'react';
import { AppRegistry, ViewPagerAndroid, View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {

  _onPressButton = (position) => {
    this.refs.viewPage.setPage(position);
  }

  render() {
      return (
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          ref="viewPage"
        >

          <View key="0">
          <View style={{ backgroundColor: '#FFFFFF' }}>
          <Text
            style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold', color: '#757780' }}
          >
            塔羅牌占卜
          </Text>
            </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
            <Image
                source={{ uri: 'https://i.imgur.com/UteUS1E.jpg' }}
                style={{ width: 210, height: 550 }}
            />
            <Button
              style={{ fontSize: 100 }}
              onPress={this._onPressButton.bind(this, 1)}
              title="感情"
              color="#D88373"
            />
            </View>
            <View style={{ flex: 1 }}>
            <Image
                source={{ uri: 'https://i.imgur.com/OHB9bmr.jpg' }}
                style={{ width: 210, height: 550 }}
            />
            <Button
              onPress={this._onPressButton.bind(this, 2)}
              title="事業"
              color="#477998"
            />
            </View>
          </View>
          </View>


          <View key="1">
          <View style={{ flex: 1 }}>
          <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}>
          <Text
            style={{ fontSize: 80, textAlign: 'center', color: '#E88873' }}
          >
              Question
          </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={this._onPressButton.bind(this, 3)}
              title="你會讓異性對你一見鍾情嗎？"
              color="#E88873"
            />
            </View>
            <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 4)}
            title="最近三個月妳有機會遇到新對象嗎？"
            color="#E88873"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 5)}
            title="另一半是以什麼態度對待這段感情？"
            color="#E88873"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 6)}
            title="失去情人的你，要怎麼自我修復呢？"
            color="#E88873"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 7)}
            title="你這個月可以成功告白嗎?"
            color="#E88873"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 8)}
            title="讓你害怕去愛的阻礙是什麼？"
            color="#E88873"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 9)}
            title="你會錯過對的人嗎?"
            color="#E88873"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 10)}
            title="你能否看透他/她的心思?"
            color="#E88873"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 11)}
            title="戀人答應你的事一定會做到嗎?"
            color="#E88873"
          />
          </View>
          </View>
          </View>


          <View key="2">
          <View style={{ flex: 1 }}>
          <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}>
          <Text
            style={{ fontSize: 80, textAlign: 'center', color: '#81A4CD' }}
          >
              Question
          </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={this._onPressButton.bind(this, 12)}
              title="2018 畢業季你能找到好工作嗎？"
              color="#81A4CD"
            />
            </View>
            <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 13)}
            title=" 2018 年你適合創業嗎？"
            color="#81A4CD"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 14)}
            title="你在事業上未雨綢繆的能力如何"
            color="#81A4CD"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 15)}
            title="2018 年你的事業會順利嗎？"
            color="#81A4CD"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 16)}
            title="2018 年你在事業上能遇到貴人嗎？"
            color="#81A4CD"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 17)}
            title="興趣愛好能成為你的事業嗎？"
            color="#81A4CD"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 18)}
            title="最近你的面試運如何?"
            color="#81A4CD"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 19)}
            title="這一生你會經常換工作嗎？"
            color="#81A4CD"
          />
          </View>
          <View style={{ flex: 1 }}>
          <Button
            onPress={this._onPressButton.bind(this, 20)}
            title="你適合換個城市工作嗎？"
            color="#81A4CD"
          />
          </View>
          </View>
          </View>



          <View key="3">
            <View style={{ backgroundColor: '#ECBEB4' }}>
            <Text
              style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
            >
              你會讓異性對你一見鍾情嗎？
            </Text>
              </View>
            <ScrollView>
            <Text
              style={{ fontSize: 30 }}
            >
            {'\n'}{'\n'}
            請用直覺選一張牌{'\n'}{'\n'}
            </Text>
            <Image
                source={{ uri: 'https://imgur.dcard.tw/c8BHXHn.jpg' }}
                style={{ width: 420, height: 230 }}
            />
            <Text
              style={{ fontSize: 24 }}
            >{'\n'}{'\n'}
            牌面解析{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
              A：皇后{'\n'}{'\n'}
              你的魅力足以讓異性對你一見鍾情，倒不是因為你的外表有多麼出色，
              主要是你溫柔和體貼人的性格為你贏得了好人緣，基本上是男女老少通吃的。
              而且你善解人意，處處為別人著想的性格，會讓見到你的異性覺得自己是被尊重和呵護的，
              對你好感倍增，覺得跟你在一起非常溫暖放鬆，甚至一見不到你，便會對你朝思暮想。{'\n'}{'\n'}
              B：審判逆位{'\n'}{'\n'}
              見到你的人對你的印象還不錯，但並不會一見鍾情，如果不是經常見面，對你有深入了解的話，
              基本上見過之後就忘記了。也許你就是這樣一個性格淡如水的人吧，雖然初次見面不會給異性留下太深的印象，
              但是真正在一起相處起來卻並不會讓人覺得厭煩，反而會有種想要親近的感覺。{'\n'}{'\n'}
              C：正義逆位{'\n'}{'\n'}
              你自身的魅力並不是太強，很難讓異性對你一見鍾情。你是一個性格開朗的人，但是在擇友方面標準卻不是太高，
              身邊的朋友良莠不齊，異性朋友雖然也不少，但大多都是比較花心，心思不定的人，他們的心裡不僅僅只有你，還會有其他的人。
              不過，性格洒脫的你並不會為了討好某個異性而讓自己迷失，大家在一起開心就好，結果，隨緣。{'\n'}{'\n'}
              D：惡魔{'\n'}{'\n'}
              你有著很出色的外在條件，漂亮的外表，富裕的家庭，衣食無缺，所以很容易吸引到異性的關注，讓異性對你一見鍾情。
              不過，喜歡你的異性當中很多是衝著你的外表來的，並不是真正喜歡你這個人。如果想讓異性完全喜歡上你的話，
              你還需要提高一下自己內在的修養，讓你的內在與外表一樣出色，這樣才能夠讓異性真的愛上你。{'\n'}{'\n'}
            </Text>
            <Button
              onPress={this._onPressButton.bind(this, 0)}
              title="首頁"
              color="#808080"
            />
          <Button
            onPress={this._onPressButton.bind(this, 1)}
            title="感情"
            color="#D88373"
          />
            </ScrollView>
            </View>


            <View key="4">
            <View style={{ backgroundColor: '#ECBEB4' }}>
            <Text
              style={{ fontSize: 25, textAlign: 'center', color: '#FFFFFF' }}
            >
            最近三個月妳有機會遇到新對象嗎？
            </Text>
            </View>

            <ScrollView>
            <Text
              style={{ fontSize: 30 }}
            > {'\n'} {'\n'}
            請從下列四張牌中選出一張最喜歡的，不可以偷看答案喔！ {'\n'} {'\n'}
            </Text>
            <Image
                source={{ uri: 'http://www.mission-tw.com/ckfinder/userfiles/files/83fdb976817b0d9c43214ac07b17ffc9.png' }}
                style={{ width: 420, height: 230 }}
            />
            <Text
              style={{ fontSize: 24 }}
            > {'\n'} {'\n'}
            測驗結果
            {'\n'} {'\n'} {'\n'} {'\n'}
            A. 要小心會不會牽扯入三角關係喔{'\n'} {'\n'}
            選擇這張牌的朋友們要小心自己會不會牽扯入三角關係當中。
            一來有可能是自己本身已經有對象了，然後又遇到一個讓自己心動的人，再來也有可能遇到的人是友對象的只是選擇隱瞞，眼睛要睜大點喔！
            {'\n'} {'\n'}
            B. 桃花運比較單薄，還是先把自己的事情處理好吧{'\n'} {'\n'}
            最近的桃花運比較單薄，可能是自己的心情也沒有很想要管感情這塊，也或是自身狀況還沒很好，可以先為未來的對象做準備，
            把自己的狀態調整到最好，來準備以後遇到更好的人吧。
            {'\n'} {'\n'}
            C. 有機會遇到不錯的對象，可以好好把握 {'\n'} {'\n'}
            選擇這張牌的朋友們，恭喜各位，有機會在未來的三個月內遇到不錯的對象喔！不管在外型個性方面都會有很搭，相處起來也會沒有壓力，
            遇到這樣的對象的話一定要好好把握珍惜，別讓好機會溜走囉！
            {'\n'} {'\n'}
            D. 要小心觀察遇到的對象，不要到頭來只是自作多情 {'\n'} {'\n'}
            選擇這張牌的朋友們是友機會遇到自己心儀的人，只是要小心觀察對方的心態，不要到最後發現只是自己一廂情願喔。
            不要因為想要追求美好的愛情就忽略了現實的一些考量，還是要務實一點比較好喔。{'\n'} {'\n'}
            </Text>
            <Button
              onPress={this._onPressButton.bind(this, 0)}
              title="首頁"
              color="#808080"
            />
          <Button
            onPress={this._onPressButton.bind(this, 1)}
            title="感情"
            color="#D88373"
          />
            </ScrollView>
          </View>


          <View key="5">
          <View style={{ backgroundColor: '#ECBEB4' }}>
          <Text
            style={{ fontSize: 25, textAlign: 'center', color: '#FFFFFF' }}
          >
            另一半是以什麼態度對待這段感情？
          </Text>
            </View>
          <ScrollView>
          <Text
            style={{ fontSize: 30 }}
          >{'\n'} {'\n'}
          請從下列四張牌中選出一張最喜歡的，不可以偷看答案喔！ {'\n'} {'\n'}
          </Text>
          <Image
              source={{ uri: 'https://i.imgur.com/vstqeFM.jpg' }}
              style={{ width: 420, height: 230 }}
          />
          <Text
            style={{ fontSize: 24 }}
          >{'\n'} {'\n'}
          牌面解析：
          {'\n'} {'\n'} {'\n'} {'\n'}
          選擇A：國王{'\n'} {'\n'}
          你可以做一個小女人，事情都有他替你扛；他對你有著相當的保護欲，也有一定的占有欲，他喜歡你聽著他的話，然後按他喜歡的方式來展現給你他的愛。
          他有自己的熱情，一保護你為己任，只是他感情匱乏；容易忽略你的感受，他甚至有點固執，把自認為對你好的事情統統給你並不關心是否你真的想要！
          {'\n'} {'\n'}
          選擇B：正義{'\n'} {'\n'}
          你們之間的愛情缺少短暫刺激的美好，你的另一半，他對你有相當多理性上的考量，這裡說的理性，是不斷權衡你和他在關係兩端是不是平衡，如果不平衡，那麼應該怎麼平衡等等。
          他考慮事情都為了雙方好，一般這樣的男人在事業上是會取得可觀的，然而在感情中應該考慮付出，不然會矛盾暴增！
          {'\n'} {'\n'}
          選擇C：聖杯騎士 {'\n'} {'\n'}
          你們的感情穩定有度，他很是享受和你在一起那種若即若離，充滿想像又有讓人心花怒放般甜蜜的感覺。
          然而內心深處，他並不是真的了解你，你只是在自己的想像中，感受這份愛意，暖暖的流動著，撬開你的柔弱，感受美好幸福氛圍！你們的愛情甜蜜如常，不過考慮的結婚的時候，機率是低的！
          {'\n'} {'\n'}
          選擇D：星幣騎士 {'\n'} {'\n'}
          你們的愛情會固定穩定，只要你不離開他，一般感情不會接受的。他非常注重和你的關係的責任與義務。既然已經確認了關係，那麼，他會以各種方法來確保彼此的生活不會受到衝擊。
          因為他很想依靠穩定彼此的生活來維持關係。他不太會熱情似火，卻能細水長流：也因此會給你帶來堅強的護盾！
          {'\n'} {'\n'}
          </Text>
          <Button
            onPress={this._onPressButton.bind(this, 0)}
            title="首頁"
            color="#808080"
          />
        <Button
          onPress={this._onPressButton.bind(this, 1)}
          title="感情"
          color="#D88373"
        />
          </ScrollView>
        </View>


        <View key="6">
        <View style={{ backgroundColor: '#ECBEB4' }}>
        <Text
          style={{ fontSize: 25, textAlign: 'center', color: '#FFFFFF' }}
        >
          失去情人的你，要怎麼自我修復呢？
        </Text>
          </View>
        <ScrollView>
        <Text
          style={{ fontSize: 30 }}
        >{'\n'} {'\n'}
        請從下列四張牌中選出一張最喜歡的，不可以偷看答案喔！ {'\n'} {'\n'}
        </Text>
        <Image
            source={{ uri: 'https://i.imgur.com/Pwc7QUG.jpg' }}
            style={{ width: 420, height: 230 }}
        />
        <Text
          style={{ fontSize: 24 }}
        >{'\n'} {'\n'}
        牌面解析：
        {'\n'} {'\n'} {'\n'} {'\n'}
        選擇1：世界{'\n'} {'\n'}
        當你傷心的時候，更好的忘記過去重新開始可以：儘量讓自己不去回憶，很多時候人不能總是活在回憶中，特別是現代人，生活壓力那麼大，不必糾結與過去的種種，不妨讓自己重新開始好一點。
        凡事往前看。找自己的好朋友或者信任的親人來好好的溝通一下，不管是讓他們指導自己，還是向他們傾訴自己的苦楚，反正就是要把心裏面的不痛快，
        過於過去的事情都說出來，讓自己心裏面好受一些，才會更好的開始。
        {'\n'} {'\n'}
        選擇2：節制{'\n'} {'\n'}
        首先你要認為這很正常的事，很多人都會遇到，要抱著很平常的心態，不要認為事情了他，你就失去了全世界。其次你要多和朋友去玩，但不是去喝酒去怎麼樣去麻痹自己！
        很多時候人會觸景生情，那樣其實沒必要傷心的，你就想那時候愛過，你也有過這樣，你也很幸福過，也要謝謝他給你回憶。有回憶不管是苦是甜都是美的！​但是生活總是向前看的。
        {'\n'} {'\n'}
        選擇3：戰車 {'\n'} {'\n'}
        你當你失戀時，應該去勇敢的面對！分手最怕癱瘓不起，任何自我照顧的行動都是良藥：去打球，去狂舞，去山上、海邊大叫，去遛狗，去公園曬太陽，去看電影。
        很多人藉由儀式來完成心理的哀悼，比如燒毀昔日信函，此類告別行動頗有療傷的效果。然而因為怕說了更惹傷心或"心丑不可外揚"，
        怕別人笑話，乾脆封口，殊不知說出來就是一種治療，能說代表心理上已經可以坦然面對，承認那已是過去式了。​
        {'\n'} {'\n'}
        選擇4：戀人 {'\n'} {'\n'}
        當你失戀時，人們經常對失戀的人說，讓傷口癒合的最好辦法就是新歡和時間。若治不好，就表示新歡不夠好，或是時間不夠長。這裡的新歡，其實就可以是那個來為你修心的人。
        當然，若是你主動愛上別人，那另當別論。
        且你若能愛上別人了，說明時間這一關夠了，你已經自愈或是用其他辦法讓碎的心又完整了正常了。但那些還碎著心的人，在遇到下一個愛他的人時，總免不得先接受某個人的修心。
        {'\n'} {'\n'}
        </Text>
        <Button
          onPress={this._onPressButton.bind(this, 0)}
          title="首頁"
          color="#808080"
        />
      <Button
        onPress={this._onPressButton.bind(this, 1)}
        title="感情"
        color="#D88373"
      />
        </ScrollView>
      </View>


      <View key="7">
      <View style={{ backgroundColor: '#ECBEB4' }}>
      <Text
        style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
      >
        你這個月可以成功告白嗎？
      </Text>
        </View>
      <ScrollView>
      <Text
        style={{ fontSize: 30 }}
      > {'\n'} {'\n'}
    想著你要告白的對象，選出你最喜歡的一張牌。 {'\n'} {'\n'}
      </Text>
      <Image
          source={{ uri: 'https://imgur.dcard.tw/9umzSf9.jpg' }}
          style={{ width: 420, height: 300 }}
      />
      <Text
        style={{ fontSize: 24 }}
      >
      {'\n'} {'\n'} {'\n'}
      牌面解析：
      {'\n'} {'\n'} {'\n'}
      </Text>
      <Image
          source={{ uri: 'https://lh3.googleusercontent.com/--Q8Qcph99qY/V2S1L4ijUgI/AAAAAAAAh-0/RZNSPIn3aZI/image_thumb%25255B1%25255D.png?imgmax=800' }}
          style={{ width: 204, height: 304 }}
      />
      <Text
        style={{ fontSize: 24 }}
      >
      選擇 A ：魔術師{'\n'} {'\n'}
      這張牌面皆是你可以默默地進行告白事宜了，雖然形式有點曲折，但只要積極的、認真的去做，就會化險為夷。{'\n'}
      成功機率大概有個80%的樣子，值得一試!
      {'\n'} {'\n'}
      </Text>
      <Image
          source={{ uri: 'https://lh3.googleusercontent.com/-PQcjTMSGykQ/V2S1Nj23YVI/AAAAAAAAh_E/ao6Bb0duGgA/image_thumb%25255B2%25255D.png?imgmax=800' }}
          style={{ width: 204, height: 304 }}
      />
      <Text
        style={{ fontSize: 24 }}
      >
      選擇 B ：女祭司{'\n'} {'\n'}
      追隨你的感覺放心大膽地去做吧，成功機率很高。事情等到有100%的把握才去做的時候，往往會容易錯過時機。與其觀望、等待，不如現在就去對他說："我喜歡你!"
      {'\n'} {'\n'}
      </Text>
      <Image
          source={{ uri: 'https://lh3.googleusercontent.com/-U5lcdH4evw8/V2S1PesfBvI/AAAAAAAAh_U/TPSlqGpd_Pw/image_thumb%25255B3%25255D.png?imgmax=800' }}
          style={{ width: 204, height: 304 }}
      />
      <Text
        style={{ fontSize: 24 }}
      >
      選擇 C ：審判{'\n'} {'\n'}
      這張牌面顯示你還是不是適合迎接新戀情，因為有舊人會回頭找你重修舊好的可能。可能你內心也在兩種戀情中選擇徘徊，既然如此，何不多給大家一點考察的時間。
      {'\n'} {'\n'}
      </Text>
      <Image
          source={{ uri: 'https://lh3.googleusercontent.com/--lHnAphEYvg/V2S1RPqZ9CI/AAAAAAAAh_k/7ozyWU0s8jM/image_thumb%25255B4%25255D.png?imgmax=800' }}
          style={{ width: 204, height: 304 }}
      />
      <Text
        style={{ fontSize: 24 }}
      >
      選擇 D ：世界逆位 {'\n'} {'\n'}
      牌面顯示你目前還沒有成熟的思想準備和周全的計畫，如果一股腦得去做會弄巧成拙。提醒你感情是一件嚴肅的事情，告白意味著擔當，要想清楚了才是對大家最好的選擇。
      {'\n'} {'\n'}
      </Text>
      <Button
        onPress={this._onPressButton.bind(this, 0)}
        title="首頁"
        color="#808080"
      />
    <Button
      onPress={this._onPressButton.bind(this, 1)}
      title="感情"
      color="#D88373"
    />
      </ScrollView>
    </View>


    <View key="8">
    <View style={{ backgroundColor: '#ECBEB4' }}>
    <Text
      style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
    >
      讓你害怕去愛的阻礙是什麼？
    </Text>
      </View>
    <ScrollView>
    <Text
      style={{ fontSize: 30 }}
    >
    {'\n'} {'\n'}
    請用直覺選一張牌：{'\n'} {'\n'}
    </Text>
    <Image
        source={{ uri: 'https://i.imgur.com/gW9hdNn.jpg' }}
        style={{ width: 420, height: 230 }}
    />
    <Text
      style={{ fontSize: 24 }}
    >{'\n'} {'\n'} {'\n'}
    牌面解析：
    {'\n'} {'\n'} {'\n'}{'\n'} {'\n'}
    選擇 A ：聖杯7（不確定的未來）{'\n'} {'\n'}
    選到這張牌的朋友，讓你害怕去愛的阻礙其實是不確定的未來，在你的愛情觀中，認為未來任何事情都很有可能會發生，沒有什麼是絕對的，
    而且自己的抗壓能力並不是很強，如果遭遇負面的結果，自己一定無法承受，所以在還沒有確定安全前，是不敢去冒險愛人的。
    {'\n'} {'\n'}
    選擇 B ：寶劍7（過去的陰霾）{'\n'} {'\n'}
    選到這張牌的朋友，讓你害怕去愛的阻礙是過去的陰霾，當新的戀愛機會出現時，你過去的回憶也會跟著被喚醒，這些記憶除了是自己的親身經歷外，
    也有可能是你過去看到別人戀愛失敗痛苦的樣子，由於你不願意讓這些情形再繼續發生在自己身上，所以在面對感情你就會更步步為營，導致自己保守而不敢去愛。
    {'\n'} {'\n'}
    選擇 C ：國王（擔心掌控不了）{'\n'} {'\n'}
    選到這張牌的朋友，讓你害怕去愛的阻礙是擔心掌控不了，在你的感情觀中認為愛情是競爭的，是否可以穩固建立自己在情人中的地位很重要，
    如果發現對方是無法駕馭的人，自己在將來會因為比較愛對方而受傷，想到這些事情就覺得非常恐怖，導致自己膽怯去愛。
    {'\n'} {'\n'}
    選擇 D ：女祭師（無法接受不完美） {'\n'} {'\n'}
    選到這張牌的朋友，你害怕去愛的阻礙是無法接受不完美，你在感情方面是屬於會思考的人，而且你有著自己的生活步調，
    覺得戀情上雙方的契合度很重要，寧缺勿濫也不願隨便愛上某個人，只要對象出現一點點你不喜歡的瑕疵，你就會想很多，導致心理障礙，認為不完美，使自己無法踏出愛人的那一步。
    {'\n'} {'\n'}
    </Text>
    <Button
      onPress={this._onPressButton.bind(this, 0)}
      title="首頁"
      color="#808080"
    />
  <Button
    onPress={this._onPressButton.bind(this, 1)}
    title="感情"
    color="#D88373"
  />
    </ScrollView>
  </View>


  <View key="9">
  <View style={{ backgroundColor: '#ECBEB4' }}>
  <Text
    style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
  >
    你會錯過對的人嗎?
  </Text>
    </View>
  <ScrollView>
  <Text
    style={{ fontSize: 30, textAlign: 'center' }}
  >
  {'\n'} {'\n'}
  請從下列五張牌中選出一張最喜歡的，不可以偷看答案喔！ {'\n'} {'\n'}
  A.
  </Text>
  <Image
      source={{ uri: 'https://lh3.googleusercontent.com/-xB9mFGfBPNc/VzvvWXz7h2I/AAAAAAAAhpo/jiI1tj1njRU/image%25255B5%25255D.png?imgmax=800' }}
      style={{ width: 400, height: 304 }}
  />
  <Text
    style={{ fontSize: 30, textAlign: 'center' }}
  >
{'\n'}{'\n'}B.
  </Text>
  <Image
      source={{ uri: 'https://lh3.googleusercontent.com/-jDWfw2Bdpd0/VzvvXb-OaoI/AAAAAAAAhps/izcj35oO0YU/image%25255B8%25255D.png?imgmax=800' }}
      style={{ width: 400, height: 304 }}
  />
  <Text
    style={{ fontSize: 30, textAlign: 'center' }}
  >
  {'\n'}{'\n'}C.
  </Text>
  <Image
      source={{ uri: 'https://lh3.googleusercontent.com/-M4GL5nGim4A/VzvvYRihkHI/AAAAAAAAhpw/PqI-S-SlyJ8/image%25255B11%25255D.png?imgmax=800' }}
      style={{ width: 400, height: 304 }}
  />
  <Text
    style={{ fontSize: 30, textAlign: 'center' }}
  >
  {'\n'}{'\n'}D.
  </Text>
  <Image
      source={{ uri: 'https://lh3.googleusercontent.com/-euEsWfdcvNM/VzvvZWMwQOI/AAAAAAAAhp0/rm-Yu5P4YQU/image%25255B14%25255D.png?imgmax=800' }}
      style={{ width: 400, height: 304 }}
  />
  <Text
    style={{ fontSize: 30, textAlign: 'center' }}
  >
  {'\n'}{'\n'}E.
  </Text>
  <Image
      source={{ uri: 'https://lh3.googleusercontent.com/-YLtjX2yg_Ng/VzvvaTXfJlI/AAAAAAAAhp4/TG5aynfyBsU/image%25255B17%25255D.png?imgmax=800' }}
      style={{ width: 400, height: 304 }}
  />
  <Text
    style={{ fontSize: 24 }}
  > {'\n'} {'\n'} {'\n'}
  牌面解析：
  {'\n'} {'\n'} {'\n'}  {'\n'} {'\n'} {'\n'}
  選擇 A ：權杖十正位：{'\n'}感情裡你要學會放手 {'\n'} {'\n'}
  對於選中這張牌面的你來說，路過和錯過這兩個詞都不合適——你只是太想讓一段感情變得完美，太想感情依照自己的想法自己的模式經營下去。{'\n'}
  不能說你不對，因為你並未放縱自己，在嚴格要求別人的同時也在約束自己。但是，你需要知道的是，感情這件事是雙方的，有時甚至是多方的，
  單戀之所以成為單戀因為兩個人不在一個軌道內，而感情能夠長久維持也並不能只靠你一方的熱火朝天。否則，效果只能是適得其反。
  在感情關係中，你絕對有實力坐穩自己的位置，也有辦法經營好自己的愛情。但是，如果你無法停止你強大的控制欲，有很大的可能是，
  將自己變成為別人路過的港灣，或者錯過的鏡花水月而已。 {'\n'} {'\n'}
  選擇 B ：力量正位：{'\n'}停下和再出發都難不倒你{'\n'} {'\n'}
  無論是感情的路過還是錯過，是遇見真愛還是長相廝守的細水長流，對於選中此張牌面的你來說都不是難事。
  因為你自身就是充滿正面能量的載體，既有能力成就經營一段長久穩定、令雙方(不僅是對方，一定包括自己自己)滿意的感情關係，同樣也有能力應對遺憾的或者錯位的感情。
  在感情中，你不是為了別人而活，而是為了自己而活的人。在你身上不存在強烈的控制欲和攻擊性，也沒有刻意的冷漠和疏離感，
  恰如其分的分寸就是你面對感情的態度——因你有足夠的自信和勇氣。停下腳步和再上征途，都難不倒你。 {'\n'} {'\n'}
  選擇 C ：聖杯二正位：{'\n'}你就是對的那個人 {'\n'} {'\n'}
  首先要恭喜選中這張牌面的你。無論你想到的那個名字是誰，或者尚未想到哪個名字、哪個人，但是只要你們進入彼此的生命，那麼，你就是傳說中“對的那個人”。
  從你個人的角度，你樂於發散你的正面能量，同時也樂於接受別人善意;
  從他人的角度，你忠於感情、信守承諾，卻又不刻板無趣，相反，你的伴侶會認為你是一個非常有趣且善於分享快樂的人——這種良性互動帶來的只能是一加一大於二的利好。
  你是一個認真對待感情的人，擁有既是擁有，放下既是放下，不存在路過的情緣、錯過的情分這種事情。{'\n'} {'\n'}
  選擇 D ：寶劍二正位：{'\n'}容易路過 謹慎觀察 {'\n'} {'\n'}
  過去存在於你生命中的一段情感經驗(不一定是愛情關係)還沒能令你走出來。或者說，你認為自己走出來了，但在當下、目前你的生活中，其實一而再再而三的影響到你對感情這件事情的判斷。
  現在的你，不再願意為了感情像戰士一樣戰鬥，反而持有一種老謀深算的觀望態度，你認為自己掩藏得很好，其實只要足夠接近你的人，比如準備與你結合成一段穩定關係的人都能感覺的到。
  任何人都不希望成為替代品或者只是一個感情的過站，但你卻經常在實際操作中促使自己成為如此。要觀察就仔細觀察，要出發就勇敢出發。不要耽誤美好時光。{'\n'} {'\n'}
  選擇 E ：寶劍國王逆位：錯過不錯過全在於你 {'\n'} {'\n'}
  鞋合不合腳只有你自己知道，感情合適不合適也只有你自己知道。一段感情的好與不好，別人怎麼說、怎麼看雖然也重要，你自己怎麼想、怎麼看才是最重要。
  但對於你來說，你並不清楚自己在一段感情中真正需要的核心是什麼，這也意味著，你對於感情的看法和處理方式並不成熟。一旦遇到不平順的事件，自私和衝動的念頭就會不由自主冒出。
  感情需要信任和寬容，遇見對的人就要好好珍惜。在感情遇到問題時你可能更應該反省的是自己的問題。錯過的美好，最令人心痛。究竟是否是錯過的還是被錯過的彼此，你心裡才最清楚。
    {'\n'} {'\n'}
    </Text>
  <Button
    onPress={this._onPressButton.bind(this, 0)}
    title="首頁"
    color="#808080"
  />
<Button
  onPress={this._onPressButton.bind(this, 1)}
  title="感情"
  color="#D88373"
/>
  </ScrollView>
</View>


<View key="10">
<View style={{ backgroundColor: '#ECBEB4' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
  你能否看透他/她的心思?
</Text>
  </View>

<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請用平靜的心情，憑直覺從下面四張牌當中選擇一張看結果。{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/nqgmhuC.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
第一張牌：戀人正位{'\n'} {'\n'}
對於你喜歡的人，你很容易就看透對方，在想些什麼，你知道你們的感情如何，也很確定地明白你們彼此的差距在哪。這都是你們的感情能一步步好起來的原因，
也許一開始彼此之間沒有那麼強烈的默契，但是隨著感情的深入，你們的關係會更好。比如對方信任的同學，你們需要時間來磨合。你更願意相信日久見人心，
所以對一些心思的了解也是時間培養起來的。你並不會相信一見鍾情也並不貴，在長久的相處之後，仍然對這段愛情沒有期待。
{'\n'} {'\n'}
第二張牌：月亮正位{'\n'} {'\n'}
豬頭這張牌說明對於男女之間的關係，你一直都保持著曖昧態度，你身邊有很多和你關係要好的異性朋友，這些人當中有你真心喜歡的人，也有你曖昧的人選，
但不管是誰，你似乎都沒有明確說明自己的感受如何，只是跟對方保持著說不清道不明的關係。暗戀是你在處理男女關係上經常用的手法，然而在遇到合適的人時，
你也會因為態度不明確而丟失了戀愛的機會，牢牢把握你可以跟心愛的人相處的時間吧。
{'\n'} {'\n'}
第三張牌：戰車逆位 {'\n'} {'\n'}
抽到這張牌，說明你在感情上是一個很魯莽的人，而對於異性的想法你並不是很了解，很多時候你都按照自己的性格行為來決定愛情當中異性的想法如何，
卻在不知不覺當中我回了別人的意思，也許你能平穩下心來，認真的對待一段關係的，但是在你的感情歷程中，認為自己所有的做法都是對的。
或許你把你們之間的關係想的太理想了，這也就是你在愛情上沒受傷害的原因吧。
{'\n'} {'\n'}
第四張牌：審判正位 {'\n'} {'\n'}
日久見人心，經常跟你相處的異性，你是很容易就看出對方的心思，而你們相處並不是很平凡，特別是不經常見面的話，自然在感情方面認可度不是很高，
在你看來默契是兩個人互相了解之後才建立起來的，同時你對異性的想法，也是需要很長一段時間了解才能肯定的，只是，在你處理異性關係時太過慢熱，
也許會在不知不覺當中錯過一些感情呢，在遇到合適的人是好好把握你們的關係，相信感情會更好。別讓好的緣分被時間給衝散。
{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 1)}
title="感情"
color="#D88373"
/>
</ScrollView>
</View>


<View key="11">
<View style={{ backgroundColor: '#ECBEB4' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
  戀人答應你的事一定會做到嗎?
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請保持內心平靜的狀態，憑直覺從下面四張牌當中選擇一張看結果。{'\n'} {'\n'}
{'\n'}{'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/nqgmhuC.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
第一張牌：戀人逆位{'\n'} {'\n'}
從這張牌來看，你的戀人並不是一個很專一的人，他很會說一些甜言蜜語，也許是希望跟你更好的相處，但這並不代表他所有的承諾都會實現，
若是你對你們的關係還有疑慮的話，那就要有一定的防備心理才好。對方所說的也許能做到，也許做不到，所以你可不要全都相信，否則最終受傷害的只能是你自己。
{'\n'} {'\n'}
第二張牌：世界逆位{'\n'} {'\n'}
或許在愛情方面，你們倆所期待的東西不同，因此對方的很多承諾都難以兌現，你雖然對你們的感情還抱有期待，但是你也很清楚的知道，兩個人對待感情的態度差別有多大，
若是你能能清楚的看到這些差別究竟何在，你的愛情也許會幸福的很多。你的戀人答應你的事情是很難做到的，雖然你們當下處於戀愛關係，但是對於未來的事情，兩個人都沒有考慮太多，
所以你們的感情是很容易走向分手的。
{'\n'} {'\n'}
第三張牌：星星正位 {'\n'} {'\n'}
你和戀人之間相處得就像朋友一樣，你們之間無話不談，有什麼事情都會相互交流，從這點上看，對方答應你的事情多半都會做到的，不管有多難，他願意和你一起去面對的事情，
你們就一起能夠解決了，但對方答應你的事情並不是每一次都能按時完成，你需要體諒到他也會有生活方面的苦衷，或者是工作方面的麻煩，若是你不能夠換位思考，你們的感情也不會幸福的。
你還是很懂得如何和戀人相處的，你們的默契程度很高，感情自然也會幸福的。
{'\n'} {'\n'}
第四張牌：隱士正位 {'\n'} {'\n'}
你們的感情信任指數非常高，對方答應你的事情會盡力完成，而你對對方也是深信不疑，你們之間的關係處理的非常好，兩個人對感情的未來非常看好，你們也願意相信，
彼此之間的付出，最終會讓這段愛情開花結果。能遇到一個合適的人，在彼此看來是很不容易的，所你們是如此的珍惜這段關係，這會讓你們的愛情甜蜜又美好。
{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 1)}
title="感情"
color="#D88373"
/>
</ScrollView>
</View>


<View key="12">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
  2018 畢業季{'\n'}你能找到好工作嗎？
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請憑直覺從以下牌陣中選擇一張牌看結果。{'\n'} {'\n'}
{'\n'}{'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/naIEPJ8.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/Zhangqi.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第一張牌：能遇到好的工作機會{'\n'} {'\n'}
從這張塔羅牌來看，你在畢業之后，的確是能在短暫時間內遇到好的工作機會。
其原因在于，你是一個非常強勢的人，而在工作選擇上，你非常有自己的主見，你知道什么樣的工作是適合你的，也知道怎樣的人生，是你可以選擇和長久走下去的。
這張牌同時也說明，你比別人要優秀很多，在團隊構建和處理問題的能力上都比別人要強，因此在剛剛進入職場的不長時間內，你就已經給上司留下了良好的印象。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/Jinbi02N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第二張牌：會找到一份收入不太高的工作{'\n'} {'\n'}
抽到這張塔羅牌表明，你可能會找到一份收入不太高的工作。其實對于剛剛畢業的你來說，并沒有特別在意收入的問題，能遇到一份真正能讓你靜下心來去努力的工作就是好的，
縱然是在這份工作中會遇到這樣或那樣的麻煩，你都能夠接受，學習更多的東西，能積累經驗才是更重要的。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/Bei08.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第三張牌：會因為感情而影響工作{'\n'} {'\n'}
從這張塔羅牌來看，在畢業之后，你是更希望能和心愛的人在同一家公司工作，或者是你工作不要影響到自己的感情。然而你太在意感情對你們生活的影響，
也會在找工作時偏離了原有的方向，在畢業之后你是很難碰到真正適合你的工作，這也出于你在工作方面沒有做好規劃，若是為了愛情而放棄好的工作機遇，這也是得不償失的選擇呢。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/Bei08.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第四張牌：朋友介紹好工作 {'\n'} {'\n'}
抽到這張塔羅牌，說明你是可以通過朋友的幫助和介紹，碰到一份好的工作機會。
而在這份工作當中，你也會表現得很優秀，在你看來能夠碰到一份好的工作，就要好好珍惜。在人際關系處理上，你的確是非常優秀，而你也很清楚的知道，
如何能夠利用你當下在人際關系上的優勢，遇到更多的朋友和得到朋友們的幫助。即便是剛剛畢業，在朋友的幫助下，你也能在短暫時間內找到好的工作。
{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


<View key="13">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
  2018 年你適合創業嗎?
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請憑直覺從以下牌陣中選擇一張牌看結果。{'\n'} {'\n'}
{'\n'}{'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/cjcQ03e.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/jinbi7N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
缺少資金，不適合創業{'\n'} {'\n'}
這張牌說明你在財運的規劃方面并不是一把好手，再加上當下，不管你做什么，都比較缺乏資金的累積。
因此在短暫時間內你并不適合創業，創業給你帶來的巨大壓力也是你很難消化的，在這段時間里你可以學習更多的思維方式或者職業特征，為你將來謀劃一份好的工作，但創業這樣的事情還是再緩一段時間吧！
抽到這張牌的，你也說明是個涉世未深的新人，在面對社會和工作的雙重壓力之下，你還沒有完全適應，你的確是有能力，但這種能力并不適合在當下釋放出來。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/bei02.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
適合與異性朋友合作創業{'\n'} {'\n'}
不管你做什么選擇，和別人合作是最好的，尤其是你的異性朋友。在你的朋友當中，異性要比同性多許多，再加上你很了解異性的心思，
因此如果你所從事的行業跟異性所使用的產品或日常用品有關，那收入是相當不錯的。但也需要小心，你雖然很了解異性朋友，
可身為有戀人的你，如果跟異性朋友太近，也容易導致感情上出現矛盾。每個人都希望能夠擁有一段專情的愛，可是你身邊的異性朋友太多會讓你的戀人失去安全感，這是你需要注意的。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/jinbi4.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
無論創業與否都容易有好的收入{'\n'} {'\n'}
2018 年里你的收入是相當不錯的，不管你選擇創業還是在職場上更加努力，都會能夠給你帶來豐厚的收入，其主要原因在于這一年里你的運氣不錯。你在工作方面一直勤勤懇懇，你也愿意相信努力是成功的不二法門，
跟身邊的其他人相比，你在財運的規劃上也是一把好手，因此你都能夠在18年里賺的鍋滿瓢滿！在別人選擇悠閑的時光，而你正在奮斗第一線的路上，這或許就是創業成功的最好品質吧。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/zhanche2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
2018 年適合創業{'\n'} {'\n'}
抽到這張牌說明你已經準備了有段時間，你對創業的事情也是充滿期待的，你相信自己有能力，也已經到了創業的成熟階段，既然已經準備了很長時間，你想做的事情就放手去干吧。抽到這張牌，
說明在2018年這一年里你的收入會相當不錯，而你的收入也主要來自于身邊的朋友對你的幫助和期待，以及你自身的努力。你在事業上已經花費了太多的時間，不妨抽空讓自己的心靈放個假。
{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


<View key="14">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 28, textAlign: 'center', color: '#FFFFFF' }}
>
  你在事業上未雨綢繆的能力如何?
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請憑直覺從以下四張牌中選擇一張看結果。{'\n'}{'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/cjcQ03e.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/ZhangQu.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第一張牌：權杖皇后逆位{'\n'} {'\n'}
你的管理能力很強，但有些時候你在工作方面表現得有些情緒化，尤其是對你事業上規則顯得有些理想化，常常想的過于樂觀，不太有未雨綢繆的能力。
其實在很多事上你需要表現得果斷一些，越是猶豫，越是容易錯失了工作上的良好機會。
對于未來的事情誰都說不準，有一個樂觀的心態不是壞事，但是也要考慮到各種風險，早做打算，早有安排，這樣才能讓自己立于不敗之地。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/baojian7N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第二張牌：寶劍七逆位{'\n'} {'\n'}
從這張牌來看，在人際關系上的麻煩事，是你不得不處理的。你沒有意識到自己和別人之間的差距何在，
雖然每個人在事業上都有些獨立的想法和判斷，但能夠被身邊的更多人所接受才好，而從這張牌看來你的很多想法是不被人看好的。
從這點來說，你在人際交往方面是缺少未雨綢繆的能力的，并沒有想到去建立好的人脈，而事業上缺少助力，總是單打獨斗，是很難有大發展的。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/shenpan2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第三張牌：審判正位{'\n'} {'\n'}
你在事業領域的努力方向是對的，因此在你進行的過程中，比別人要容易的一些。但有些時候你也會因為小的細節而出問題，這是你不得不改變的，
越是你在工作上努力的事情，越是應該在細節之處處理得更好，僅僅是有大方向并不夠。你未雨綢繆的能力還不錯，
但這并不代表你做的所有決定都是對的，一定要在某些時候注重細節上的維護，否則你在事業上容易出現問題。這張牌也預示你如果從事思維創作類型的工作，會取得更大的成功。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/mingyunlun2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第四張牌：命運之輪正位 {'\n'} {'\n'}
你事業上未雨綢繆的能力很不錯，再加上你個人的性格比較圓融，不管你做什么，都能夠做出正確的判斷，只是有些時候要慎重一點，
否則你在工作上會經常遇到些小麻煩。你的運氣很好，這也是你能夠成功的主要原因，但不要對自己的所有策劃都太過自信，畢竟每個人都有失敗的時候，如果太自負的話，會阻礙你的事業往更高層次邁進。
{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


<View key="15">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
2018 年你的事業會順利嗎？
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請憑直覺從以下四張牌中選擇一張看結果。{'\n'}{'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/bswDd6a.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'}{'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/xingxing2N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
A：星星逆位{'\n'} {'\n'}
選擇這張牌預示，2018 年你的事業運勢不太理想，似乎你在工作上有些缺乏靈感，無法提出新的構想，因此在工作中表現平平，而且你自己對事業的看法和方法不容易得到別人的認可，
使你出現依賴他的人的習慣。另外你會發現工作的實際狀況與你預想的差距很大，也許你的工作計劃可能被迫停止或更改，容易讓你對工作產生失望情緒。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/nujisi2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
B：女祭司正位{'\n'} {'\n'}
選擇這張牌預示，2018 年你的事業運勢不俗，這一年你對待工作很有責任感，擁有明確的目標，會苦心鉆研各種工作技能，能夠擁有展現自身潛力，
或者是自己專業技術的機會，如果把握的好，不但能夠學到很多新東西，還會讓你的事業踏上一個新的臺階。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/taiyang2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
C：太陽正位{'\n'} {'\n'}
選擇這張牌表明，2018 年你的事業運勢很旺，而且在職場中有很好的貴人運。這一年你的事業將一帆風順，你有可能會得到一份新的工作，并在這份工作上得到成就感、
實質的報酬、與充實投入的感動。你喜愛自己的工作，會在工作中發揮你的創造力，從而做出卓越的工作業績，這些成果將使你工作態度更加積極。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/shenpan2n.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
D：審判逆位 {'\n'} {'\n'}
選擇這張牌表明，2018 年你的事業運勢比較糟糕，你對工作雖然很努力卻得不到效果，工作計劃有可能會被全盤打亂，個人容易陷入心有余而力不足的狀態，會時常有倦怠感。
雖然因為現實生活的需要，你不愿放棄現有的工作，但顯然這份工作并不適合你，如果有可能，試著換一份更適合自己的工作吧。{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


<View key="16">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 26, textAlign: 'center', color: '#FFFFFF' }}
>
  2018 年你在事業上能遇到貴人嗎？
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請憑直覺從以下四張牌中選擇一張看結果。{'\n'}{'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/naIEPJ8.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/Mingyunlun2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第一張牌：2018 年你的貴人將不只一個{'\n'} {'\n'}
這張牌說明你在2018年里將遇到不只一個貴人哦！不管是在事業方面還是財運上能夠幫助你的人很多。
你喜歡交朋友，而助你所交往的朋友都很得力，對你的幫助很大。對你來說能在事業上作出一番成績，是有各方面的因素在其中的，這里面也要有你自己的努力，再加上貴人的幫助，2018 年你會如虎添翼喲。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/Zhanche2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第二張牌：能遇到得力貴人{'\n'} {'\n'}
戰車說明在事業的抉擇上你是一個很果斷的人，你相信通過努力能換來更好的成績，只是從這張牌也看的出2018年里你能遇到真正幫助你的貴人。對你來說，擁有更多的資源和貴人，能夠讓你在事業上進展得更加順利。
然而你需要小心的是，在事業的領域雖然進行的都比較順利，可是你也需要多多聽從別人的意見，不管是在事業上還是工作上你都有貴人，只是看你如何利用資源了！
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/Jinbi3.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第三張牌：貴人會給你帶來好的財運{'\n'} {'\n'}
抽到這張牌說明，2018 年你在資金方面容易遇到貴人相助，然而能否利用好這筆資金就非常重要啦！你希望能夠通過貴人的幫助在資金上更上一層樓，然而你們在規劃時就要更加用心的哦！
否則在金錢上很容易出問題的。2018 年里你的收入會不錯，但如何處理好與跟貴人之間的關系是你需要上心的，不要與貴人失之交臂喲！
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/Bei08N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第四張牌：舊情人會是你的貴人 {'\n'} {'\n'}
看來2018年在事業方面幫助你的多半是你曾經的戀人，這也是一件很幸福的事情。你很擅長在不同性格異性之間周旋，而圣杯八這張牌表明，你跟舊情人的關系處理得相當不錯，
只是這雖然也是你的一筆資源，但你也需要注意維持好彼此之間距離，否則你的事業上雖然會有進展，卻很可能讓舊情人和身邊的朋友對你印象變差呢！{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


<View key="17">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
  興趣愛好能成為你的事業嗎?
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請憑直覺從下面四張牌當中選擇一張看結果。{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/cjcQ03e.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/jinbiQN.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第一張牌：星幣騎士逆位{'\n'} {'\n'}
從這張牌來看，你的事業領域最容易出問題的是花銷部分，從事自己感興趣的工作是你的愿望，但這并不代表你真的能夠賺來錢。
平常你生活中的支出也非常大，若是你自己做生意，或者從事個人事業，最關鍵的是支出部分，你并沒有多少概念。而從這張牌來看，
將你的愛好作為事業是好，但最終能夠有高收入的可能性比較小，或者你在這個行業還需要積攢一部分人脈關系，亦或者是經驗，一定要在準備充分的情況下才做自己喜歡的事情。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/baojian8.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第二張牌：寶劍八正位{'\n'} {'\n'}
從這張牌來看，你有一幫與你有相同愛好的朋友，如果你想將愛好變為事業的話，你的這些朋友會給予你很大的幫助，而你成功的可能性很大。
當然除了人脈關系之外，你的專業知識也應該有所提高，不能單純依賴于朋友的幫助。想要做成一件事情，關鍵還是自身要有足夠的能力，再加上別人的助力，那樣才更容易成功。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/xingxing2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第三張牌：星星正位{'\n'} {'\n'}
選擇這張牌表明，只要是你喜歡的事情，你就一定會堅持到底，同時在這個過程當中，你也會感受到很多的幸福感。興趣愛好這樣的事情能夠成為你在工作方面一直堅持的，同時你的金錢觀念并不是太強，
能夠做你真正喜歡的事情，并且堅持下去，是一件很美好的事，即便是在收入方面并不是那么高，你也一定是欣然接受的。你與世無爭的性格也決定了興趣愛好是你可以一直堅持的。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/bei04.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第四張牌：聖杯四正位 {'\n'} {'\n'}
興趣能夠成為你事業的可能性比較小，在你看來，興趣和事業是有天壤之別的，而你希望一直堅持興趣的樣子，并不會因為工作的原因而有所改變。
事業和興趣總有一個是你希望能保持原味的，因此你并不會把興趣愛好當作是自己的事業來經營，即便是有這樣的機會，你也一定會堅持，興趣是興趣，事業是事業。{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


<View key="18">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
  最近你的面試運如何?
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
> {'\n'} {'\n'}
請從下列四張牌中選出一張最喜歡的，不可以偷看答案喔！ {'\n'} {'\n'}
</Text>
<View style={{ flex: 1, alignItems: 'center' }}>
<View style={{ flex: 1 }}>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/muofashi2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
</View>
<View style={{ flex: 1 }}>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/King2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
</View>
<View style={{ flex: 1 }}>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/taiyang2N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
</View>
<View style={{ flex: 1 }}>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/nujisi2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
</View>
</View>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'} {'\n'}
A：魔法師{'\n'} {'\n'}
這張塔羅牌顯示，你的口才很不錯，語言表達能力很強，憑借這一點你是很多崗位老板都喜歡的人才。
也許你的專業技術不是很強，但是你的溝通能力很讓人喜歡和信任，如果把公司里面重要一點的合同交給你去談判的話，老板也是很放心的，這段時間你的面試運氣是非常不錯的哦！
{'\n'} {'\n'}
B：皇帝{'\n'} {'\n'}
選擇這張塔羅牌表明，最近你的面試運氣很好。你是資質比較深的人，在某個領域里有自己獨特的見解，
并且在這個行業里你的確是從事了有一段時間了，經驗是你能夠在面試當中脫穎而出的最關鍵的因素，這也是其他人比不上你的地方，憑借你的工作經驗，你會為自己謀到一份好工作的。
{'\n'} {'\n'}
C：太陽逆位{'\n'} {'\n'}
這張塔羅牌預示，最近一段時間里你的面試運不是很好。主要原因在于你對自己太過自信了，覺得自己能夠做很多事情，高估了自身的能力，實際上距離面試官的要求還有一段距離。
而且你過于高調的表現會給面試官留下不穩重的印象，所以你很可能會被面試官Pass掉。看來你還是應該調整一下對自我的認知，多多提高一下自身的能力，再去謀求好工作更實際一些。
{'\n'} {'\n'}
D：女祭司 {'\n'} {'\n'}
這張塔羅牌表明，你最近的面試運很不好。主要原因不是你的能力不夠，而是你在面試中表現的太過冷淡，沒有將自己的特點和優勢表現出來，這是你失利的最大原因！是因為太過自信還是信心不足？
雖然面試時不能太過張揚，但也不能過于低調，不然面試官會認為你缺乏自信，從而懷疑你能力不夠，這樣豈不是白白錯過了一個好機會。{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


<View key="19">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
  這一生你會經常換工作嗎?
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請憑直覺從下面四張牌當中選擇一張看結果。{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/cjcQ03e.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/xingxing2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第一張牌：星星{'\n'} {'\n'}
你是一個堅持希望和夢想的人，每次有了新的工作機會時你都毫不猶豫地想去抓住，所以會經常跳槽換工作，但這可并不是一個好習慣呢！
有時候你的半途而廢浪費的是你的好機會，也許工作一開始都不那么容易，只要堅持做下去，就會越來越順手。
如果總是這山望著那山高，不斷地從新開始，那你就永遠站在起點，難以有更高的發展。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/nuhuang2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第二張牌：皇后{'\n'} {'\n'}
你的家庭條件不錯，或者是你的另一半家庭環境很好，這些會讓你沒有那么大的事業心，只要簡簡單單地生活就好了。
所以你不會經常換工作，只要找到一份穩定的工作，每天能夠有事情做，不會太清閑，太無聊就好，不需要在事業上有多大的成就。生活過得簡單隨意，這就是你最大的幸福。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/zhanche2N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第三張牌：戰車逆位{'\n'} {'\n'}
當你覺得這個工作不如意的時候你就會自然而然的退縮，會想要換一個環境重新開始。每個人的工作都很難一帆風順，都需要克服各種困難，面對各種壓力，關鍵是要有足夠的抗壓能力，才能將工作做好。
或許你真的應該好好考慮一下如何才能做到不經常換工作，克服困難其實并沒有那么難，不要一直退縮才是最好的選擇呢！
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/daodiaozhe2N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第四張牌：倒吊者逆位 {'\n'} {'\n'}
你并不會經常換工作，但是你給自己的壓力太大，在工作方面擔心的事情很多呢！你的個性應該是悲觀型的，每當遇到困難時，容易產生很多負面的想法，
使你不能正確面對這些困難，不是嫌棄自己的能力太差，就是怨恨別人不來幫助你，總是不能有一個樂觀積極的態度，去想辦法解決困難。
你的不好的想法太多了，即便是你已經在這個工作上穩定下來了，雖然不會經常換工作，但是總會覺得自己的這份工作不順心，其實是你心態有問題呢。
{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


<View key="12">
<View style={{ backgroundColor: '#9FB1BC' }}>
<Text
  style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}
>
  你適合換個城市工作嗎？
</Text>
  </View>
<ScrollView>
<Text
  style={{ fontSize: 30 }}
>{'\n'} {'\n'}
請憑直覺從下面四張牌當中選擇一張看結果。{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://i.imgur.com/naIEPJ8.jpg' }}
    style={{ width: 420, height: 230 }}
/>
<Text
  style={{ fontSize: 24 }}
>{'\n'} {'\n'}
牌面解析
{'\n'} {'\n'}{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/jinbi4.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第一張牌：適合去大城市發展{'\n'} {'\n'}
這張牌說明越是壓力大的工作，反而能夠激發你的工作潛能，你非常希望能有更嚴峻的環境挑戰，督促自我的成功。
對你來說，當下的工作環境和你所在的城市，并不能提供給你更好的發展空間，而你需要更多的工作歷練，才能找到自己真正想要的。
同時，這張牌也說明，在短時間內，你或許要經歷壓力比較大的工作，好在這對你的成長也是有好處的。選擇到大城市去歷練一下，相信你的工作技能也會有上升的可能。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/zhang03N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第二張牌：不適合轉換城市{'\n'} {'\n'}
這張牌說明在新的一年當中，你換工作的可能性比較小。即便是你希望有更多的歷練，你也會考慮通過旅游的方式讓你見識更多的地域文化，而并非換一個城市工作。在一個人生地不熟的城市里從新開始，
會讓你有更多的擔心之處，而你對當下的工作和你所生活的環境已經非常熟悉也特別喜歡，再加上你目前的工作狀況并不差，并沒有必要轉換環境，“安于現狀”才是最好的選擇。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/zhanche2.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第三張牌：適合在離家近的地方工作{'\n'} {'\n'}
這張牌說明在2018年里，你比較適合在離家近的地方工作，你對家庭的依賴程度是非常高的，希望能夠有更多的時間待在家人身邊，所以選擇一份離家近的工作，
會讓你擁有更多的溫暖。也許你離家在外已有很長的時間了，對于家鄉有著很深眷戀感，這也表明，你適合回家發展事業了。
{'\n'} {'\n'}
</Text>
<Image
    source={{ uri: 'https://www.lnka.tw/images/article/jinbi6N.jpg' }}
    style={{ width: 197, height: 342 }}
/>
<Text
  style={{ fontSize: 24 }}
>
第四張牌：目前的工作最合適 {'\n'} {'\n'}
選擇這張牌表明，2018 年你換工作城市的可能性不大，因為你當下的崗位經濟狀況不錯。對你來說，擁有更高的收入是選擇工作的重要指標，而你對現在的薪水收入還是比較滿意的。能夠擁有這樣一份工作，
對你來說也已經是很幸運的事情，因此你會好好珍惜這份工作。而且通過工作，你也能夠學到更多的工作技能和知識，對你未來的長遠發展是有好處的，這一點你心知肚明。
{'\n'} {'\n'}
</Text>
<Button
  onPress={this._onPressButton.bind(this, 0)}
  title="首頁"
  color="#808080"
/>
<Button
onPress={this._onPressButton.bind(this, 2)}
title="事業"
color="#477998"
/>
</ScrollView>
</View>


     </ViewPagerAndroid>

 );
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
viewPager: {
 flex: 1
},
pageStyle: {
 alignItems: 'center',
 padding: 50,
}
});
