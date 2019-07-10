module.exports = {
	'Passei Direto Teste' : function (browser) {
		browser
			.windowMaximize()
			.url('https://www.passeidireto.com')//Acessa o link
			//.pause(10000)
			.waitForElementVisible('#header', 30000, false)//Aguarda carregar a página
			.click('[id="dropLogin"]')//Clica no botão de login
			.waitForElementVisible('input[type=text]', 30000, false)//Aguarda campo de texto ficar visível
			.setValue('input[type=text]', 'pdtestelogin@gmail.com')//Preencho campo e-mail
			.setValue('input[type=password]', 'pd@1234@')//Preencho campo senha
			.click('#header > div > div > div.site-header-wrapper > header > div > div > ul > li.active > div > ul > div > ul > li:nth-child(4) > button')//Clico no botão de login
			.waitForElementVisible('body', 30000, false)//Aguarda carregar a página
			//.pause(60000)
			.assert.containsText('#app > div > div.pd-content-header > nav > div > div > div.layout.align-center > ul > li.pd-user > div > div.v-menu__activator > div > div.content_info > h1', 'Passei', 30000, false)//Valido que é apresentado o texto Passei
			.setValue('input[type=text]', 'trex-row')//Preencho o campo de busca com trex-row
			.keys(browser.Keys.ENTER)//Pressiono o Enter para efetuar a busca
			.assert.containsText('#app > div > main > div > div > div > div.body.pd-grid > div.pd-grid > div.SearchResult > div:nth-child(1) > div > div:nth-child(2) > div > ul > li:nth-child(1) > div > div > a > div > div.pd-card-content > h1', 'trex-row', 3000, false)//Valido que o material foi encontrado pelo texto
			.click('#app > div > main > div > div > div > div.body.pd-grid > div.pd-grid > div.SearchResult > div:nth-child(1) > div > div:nth-child(2) > div > ul > li:nth-child(1) > div > div > a > div > div.pd-card-content > h1')//Clico no material buscado
			.waitForElementVisible('#app > div.application--wrap > main > div > div > div > div > div.layout.align-space-around.justify-space-around.row.fill-height > div.flex.mv-material-viewer-main > div > div.layout.mv-material-viewer-toolbar.align-center.justify-space-between.row.fill-height > div:nth-child(3) > button', 30000, false)//Aguardo carregar a página
			.click('#app > div.application--wrap > main > div > div > div > div > div.layout.align-space-around.justify-space-around.row.fill-height > div.flex.mv-material-viewer-main > div > div.layout.mv-material-viewer-toolbar.align-center.justify-space-between.row.fill-height > div:nth-child(3) > button')//Clico no botão para salvar o material
			.waitForElementVisible('#modals-container > div > div > div.v--modal-box > div > div.main > div > h1', 3000, false)//Aguardo carregar a página para salvar o material
			.click('#modals-container > div > div > div.v--modal-box > div > div.main > div > div.form > div > div > div.v-input__slot > div')//Clico no campo de texto para informar o nome da lista a ser criada
			.setValue('#modals-container > div > div > div.v--modal-box > div > div.main > div > div.form > div > div > div.v-input__slot > div > input[type=text]', 'PD Teste')//Informo o nome da lista
			.click('#modals-container > div > div > div.v--modal-box > div > div.main > div > div.footer > button.pd-btn_base.v-btn.v-btn--depressed.v-btn--round.theme--light.orange')//Clico para criar a lista
			.pause(5000)
			.waitForElementVisible('#app > div.application--wrap > main > div > div > div > div > div.layout.align-space-around.justify-space-around.row.fill-height > div.flex.mv-material-viewer-main > div > div.layout.mv-material-viewer-toolbar.align-center.justify-space-between.row.fill-height > div:nth-child(3) > button', 3000, false)//Aguardo carregar a página do material buscado novamente
			.assert.containsText('[id="app"]', 'Salvo', 3000, false)//Valido que o material foi salvo
			.click('#app > div.application--wrap > main > div > div > div > div > div.mv-navigate-back.fullscreen-hide > i')//Clico para retornar para a página principal
			.waitForElementVisible('body', 30000, false)//Aguardo carregar a página principal
			//.assert.containsText('#app > div > main > div > div > div > div.subject-page-content.pd-grid > div.subject-page-community.pd-grid > div:nth-child(1) > div.subject-page-load-material > h3', 'Material buscado', 30000, false)//Valido que o texto Material Buscado é apresentado
			.assert.containsText('#app > div > div.pd-content-header > aside > ul > li:nth-child(6) > ul > li:nth-child(1) > a > span', '1', 30000, false)//Valido que temos uma lista nova salva pelo texto 1
			.click('#app > div > div.pd-content-header > aside > ul > li:nth-child(6) > ul > li:nth-child(1) > a')//Clico na lista criada
			.waitForElementVisible('#app > div.application--wrap > main > div > div > div > div.pd-grid > div > div > div.pf-list.pf-tabs-content-container > div.pf-list-list > span > a > div.pd-thumbnail-list.pd-card-list-thumbnail', 30000, false)//Aguardo carregar a página com as listas criadas
			.assert.containsText('#app > div.application--wrap > main > div > div > div > div.pd-grid > div > div > div.pf-list.pf-tabs-content-container > div.pf-list-list > div.pf-list-total', '1 lista', 30000, false)//Valido que tenho 1 lista salva
			.assert.containsText('#app > div.application--wrap > main > div > div > div > div.pd-grid > div > div > div.pf-list.pf-tabs-content-container > div.pf-list-list > span > a > div.pd-card-list-body > div.pd-card-list-header > div.pd-card-list-title > h1', 'PD Teste', 30000, false)//Valido que a lista PD Teste é apresentada
			.assert.containsText('#app > div.application--wrap > main > div > div > div > div.pd-grid > div > div > div.pf-list.pf-tabs-content-container > div.pf-list-list > span > a > div.pd-card-list-body > div.pd-card-list-header > div.pd-card-list-title > h3', '1 material', 30000, false)//Valido que tenho apenas 1 material salvo
			.click('#app > div.application--wrap > main > div > div > div > div.pd-grid > div > div > div.pf-list.pf-tabs-content-container > div.pf-list-list > span > a > div.pd-card-list-body > div.pd-card-list-header > div.pd-card-list-title > h1')//Clico no material criado
			.waitForElementVisible('#app > div.application--wrap > main > div > div > div > div > div.layout.align-space-around.justify-space-around.row.fill-height > div.flex.mv-material-viewer-main > div > div.layout.mv-material-viewer-toolbar.align-center.justify-space-between.row.fill-height > div:nth-child(3) > button', 3000, false)//Aguardo carregar a página com o material salvo
			.assert.containsText('[id="app"]', 'Salvo', 3000, false)//Valido que o material é apresentado e que ele está salvo
			.click('#app > div.application--wrap > main > div > div > div > div > div.layout.align-space-around.justify-space-around.row.fill-height > div.flex.mv-material-viewer-main > div > div.layout.mv-material-viewer-toolbar.align-center.justify-space-between.row.fill-height > div:nth-child(3) > button > div')//Clico no botão Salvo, para deixar de salvar o material
			.assert.containsText('#modals-container > div > div > div.v--modal-box > div > div.main > div > h1', 'Salvar Material na Lista', 30000, false)//Valido que a tela para salvar o material na lista é apresentada
			.assert.containsText('[id="modals-container"]', 'PD Teste', 30000, false)//Valido que a lista criada é apresentada
			.click('#modals-container > div > div > div.v--modal-box > div > div.main > div > div.my-lists-container > div > div > div > ul > li > i.v-icon.v-icon--link.material-icons.theme--light')//Clico para remover o material da lista PD Teste
			.assert.containsText('#modals-container > div:nth-child(2) > div > div.v--modal-box.pd-option-delete-list-modal > div > div.dialog_header > h2', 'Último material da lista', 10000)//Valido que a tela de remover o material da lista é apresentada
			.click('#modals-container > div:nth-child(2) > div > div.v--modal-box.pd-option-delete-list-modal > div > div.dialog_footer > div > span')//Clico para deletar a lista
			.assert.containsText('#app > div.application--wrap > main > div > div > div > div.pd-grid > div > div > div.pf-list.pf-tabs-content-container > div.pf-list-list > div.pd-empty-state.pd-fade-in.pf-empty-state > div.pd-side-text > div.title-empty', 'Sem listas por aqui', 10000, false)//Verifico que não tenho nenhuma lista criada
			.click('#app > div > div.pd-content-header > nav > div > div > div.layout.align-center > ul > li.pd-user > div > div.v-menu__activator > div > div.content_info > h1')//Clico no usuário
			.assert.containsText('#app > div.application--wrap > div.pd-content-header > nav > div > div > div.layout.align-center > ul > li.pd-user > div > div.v-menu__content.theme--light.menuable__content__active > div > a > div.text > h1', 'Passei Direto', 5000, false)//Verifico que o menu suspenso foi apresentado
			.click('#app > div.application--wrap > div.pd-content-header > nav > div > div > div.layout.align-center > ul > li.pd-user > div > div.v-menu__content.theme--light.menuable__content__active > div > ul:nth-child(3) > li > button')//Clico para sair do site
			.end();//Encerro o driver
	}
}