export default `<%@Master language="C#"%>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="wssuc" TagName="Welcome" src="~/_controltemplates/15/Welcome.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<SharePoint:SPHtmlTag dir="<%$Resources:wss,multipages_direction_dir_value%>" ID="SPHtmlTag" runat="server">
<head runat="server">
  <meta name="GENERATOR" content="Microsoft SharePoint"/>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
  <SharePoint:IECompatibleMetaTag runat="server"/>
  <meta http-equiv="Expires" content="0"/>
  <SharePoint:RobotsMetaTag runat="server"/>

  <%-- page title --%>
  <SharePoint:PageTitle runat="server">
    <asp:ContentPlaceHolder id="PlaceHolderPageTitle" runat="server">
      <SharePoint:ProjectProperty Property="Title" runat="server"/>
    </asp:ContentPlaceHolder>
  </SharePoint:PageTitle>

  <%-- icons --%>
  <SharePoint:SPPinnedSiteTile TileUrl="/_layouts/15/images/SharePointMetroAppTile.png" TileColor="#0072C6" runat="server"/>
  <SharePoint:SPShortcutIcon IconUrl="/_layouts/15/images/favicon.ico?rev=23" runat="server"/>

  <%-- sharepoint script and style --%>
  <SharePoint:StartScript runat="server"/>
  <SharePoint:CssLink Version="15" runat="server"/>
  <SharePoint:ScriptLink language="javascript" name="core.js" OnDemand="true" Localizable="false" runat="server"/>
  <SharePoint:ScriptLink language="javascript" name="menu.js" OnDemand="true" Localizable="false" runat="server"/>
  <SharePoint:ScriptLink language="javascript" name="callout.js" OnDemand="true" Localizable="false" runat="server"/>
  <SharePoint:ScriptLink language="javascript" name="sharing.js" OnDemand="true" Localizable="false" runat="server"/>
  <SharePoint:ScriptLink language="javascript" name="suitelinks.js" OnDemand="true" Localizable="false" runat="server"/>
  <SharePoint:CustomJSUrl runat="server"/>
  <SharePoint:SoapDiscoveryLink runat="server"/>
  <asp:ContentPlaceHolder id="PlaceHolderBodyAreaClass" Visible="true" runat="server"/>
  <SharePoint:CssRegistration Name="Themable/corev15.css" runat="server"/>

  <%-- app styles --%>
  <SharePoint:CssRegistration Name="<% $SPUrl:~sitecollection/_catalogs/masterpage/{{ project }}/css/app.css %>" after="corev15.css" runat="server"/>

  <%-- additional page head --%>
  <asp:ContentPlaceHolder id="PlaceHolderAdditionalPageHead" runat="server"/>
  <SharePoint:DelegateControl ControlId="AdditionalPageHead" AllowMultipleControls="true" runat="server"/>

</head>
<body>

  <SharePoint:ImageLink runat="server"/>
  <SharePoint:SPNoScript runat="server"/>
  <SharePoint:SPClientIDGenerator ServerControlID="DeltaPlaceHolderMain;DeltaPlaceHolderPageTitleInTitleArea;DeltaPlaceHolderUtilityContent" runat="server"/>

  <%-- form --%>
  <SharePoint:SharePointForm onsubmit="if (typeof(_spFormOnSubmitWrapper) != 'undefined') {return _spFormOnSubmitWrapper();} else {return true;}" runat="server">

    <script type="text/javascript"> var submitHook = function () { return false; }; theForm._spOldSubmit = theForm.submit; theForm.submit = function () { if (!submitHook()) { this._spOldSubmit(); } }; </script>
    <SharePoint:AjaxDelta id="DeltaSPWebPartManager" runat="server">
      <WebPartPages:SPWebPartManager runat="Server"/>
    </SharePoint:AjaxDelta>
    <asp:ScriptManager id="ScriptManager" EnablePageMethods="false" EnablePartialRendering="true" EnableScriptGlobalization="false" EnableScriptLocalization="true" runat="server"/>
    <SharePoint:AjaxDelta id="DeltaDelegateControls" runat="server">
      <SharePoint:DelegateControl ControlId="GlobalNavigation" runat="server"/>
      <SharePoint:DelegateControl ControlId="GlobalSiteLink3" Scope="Farm" Visible="false" runat="server"/>
    </SharePoint:AjaxDelta>
    <div id="TurnOnAccessibility" style="display:none" class="s4-notdlg noindex"><a id="linkTurnOnAcc" title="<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,master_turnonaccessibility%>' EncodeMethod='HtmlEncode'/>" href="#" class="ms-accessible ms-acc-button" onclick="SetIsAccessibilityFeatureEnabled(true);UpdateAccessibilityUI();document.getElementById('linkTurnOffAcc').focus();return false;"><SharePoint:EncodedLiteral text="<%$Resources:wss,master_turnonaccessibility%>" EncodeMethod="HtmlEncode" runat="server"/></a></div>
    <div id="TurnOffAccessibility" style="display:none" class="s4-notdlg noindex"><a id="linkTurnOffAcc" title="<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,master_turnoffaccessibility%>' EncodeMethod='HtmlEncode'/>" href="#" class="ms-accessible ms-acc-button" onclick="SetIsAccessibilityFeatureEnabled(false);UpdateAccessibilityUI();document.getElementById('linkTurnOnAcc').focus();return false;"><SharePoint:EncodedLiteral text="<%$Resources:wss,master_turnoffaccessibility%>" EncodeMethod="HtmlEncode" runat="server"/></a></div>
    <div class="s4-notdlg s4-skipribbonshortcut noindex"><a href="javascript:;" title="<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,skipRibbonCommandsLink%>' EncodeMethod='HtmlEncode'/>" onclick="document.getElementById('startNavigation').focus();" class="ms-accessible ms-acc-button" accesskey="<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,skipribbon_accesskey%>' EncodeMethod='HtmlEncode'/>"><SharePoint:EncodedLiteral text="<%$Resources:wss,skipRibbonCommandsLink%>" EncodeMethod="HtmlEncode" runat="server"/></a></div>
    <div class="s4-notdlg noindex"><a href="javascript:;" title="<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,mainContentLink%>' EncodeMethod='HtmlEncode'/>" onclick="document.getElementById('mainContent').focus();" class="ms-accessible ms-acc-button"><SharePoint:EncodedLiteral text="<%$Resources:wss,mainContentLink%>" EncodeMethod="HtmlEncode" runat="server"/></a></div>
    <div id="TurnOffAnimation" style="display:none;" class="s4-notdlg noindex"><a id="linkTurnOffAnimation" title="<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,master_disableanimation%>' EncodeMethod='HtmlEncode'/>" href="#" class="ms-accessible ms-acc-button" onclick="ToggleAnimationStatus();return false;"><SharePoint:EncodedLiteral text="<%$Resources:wss,master_disableanimation%>" EncodeMethod="HtmlEncode" runat="server"/></a></div>
    <div id="TurnOnAnimation" style="display:none;" class="s4-notdlg noindex"><a id="linkTurnOnAnimation" title="<SharePoint:EncodedLiteral runat='server' text='<%$Resources:wss,master_enableanimation%>' EncodeMethod='HtmlEncode'/>" href="#" class="ms-accessible ms-acc-button" onclick="ToggleAnimationStatus();return false;"><SharePoint:EncodedLiteral text="<%$Resources:wss,master_enableanimation%>" EncodeMethod="HtmlEncode" runat="server"/></a></div>
    <a id="HiddenAnchor" href="javascript:;" style="display:none;"></a>

    <%-- hide ribbon --%>
    <SharePoint:SPSecurityTrimmedControl AuthenticationRestrictions="AuthenticatedUsersOnly" EmitDiv="true" Permissions="EditListItems" runat="server">

      <%-- body overflow when ribbon is present --%>
      <style type="text/css">body{overflow:hidden;}#s4-workspace{overflow:auto;}</style>

      <%-- suite bar --%>
      <SharePoint:AjaxDelta id="suiteBarDelta" BlockElement="true" CssClass="ms-dialogHidden ms-fullWidth noindex" runat="server">
        <div id="suiteMenuData" class="ms-hide">
          <wssuc:Welcome id="IdWelcomeData" EnableViewState="false" RenderDataOnly="true" runat="server"/>
          <span class="ms-siteactions-root" id="siteactiontd">
            <SharePoint:SiteActions accesskey="<%$Resources:wss,tb_SiteActions_AK%>" id="SiteActionsMenuMainData" PrefixHtml="" SuffixHtml="" ImageUrl="/_layouts/15/images/spcommon.png?rev=44" ThemeKey="spcommon" MenuAlignment="Right" LargeIconMode="false" runat="server">
              <CustomTemplate>
                <SharePoint:Menu Visible="false" runat="server"/>
                <SharePoint:FeatureMenuTemplate runat="server" FeatureScope="Site" Location="Microsoft.SharePoint.StandardMenu" GroupId="SiteActions" UseShortId="true">
                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_ShareThisSite" Text="<%$Resources:wss,siteactions_sharethissite%>" Description="<%$Resources:wss,siteactions_sharethissitedescription%>" MenuGroupId="100" Sequence="110" UseShortId="true" PermissionsString="ViewPages" PermissionMode="Any"/>
                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_EditPage" Text="<%$Resources:wss,siteactions_editpage15%>" Description="<%$Resources:wss,siteactions_editpagedescriptionv4%>" ImageUrl="/_layouts/15/images/ActionsEditPage.png?rev=44" MenuGroupId="200" Sequence="210" PermissionsString="EditListItems" ClientOnClickNavigateUrl="javascript:ChangeLayoutMode(false);"/>
                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_CreatePage" Text="<%$Resources:wss,siteactions_addpage15%>" Description="<%$Resources:wss,siteactions_createpagedesc%>" ImageUrl="/_layouts/15/images/NewContentPageHH.png?rev=44" MenuGroupId="200" Sequence="220" UseShortId="true" ClientOnClickScriptContainingPrefixedUrl="OpenCreateWebPageDialog('~siteLayouts/createwebpage.aspx')" PermissionsString="AddListItems, EditListItems" PermissionMode="All"/>
                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_Create" Text="<%$Resources:wss,siteactions_addapp15%>" Description="<%$Resources:wss,siteactions_createdesc%>" MenuGroupId="200" Sequence="230" UseShortId="true" ClientOnClickScriptContainingPrefixedUrl="GoToPage('~siteLayouts/addanapp.aspx')" PermissionsString="ManageLists, ManageSubwebs" PermissionMode="Any"/>
                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_ViewAllSiteContents" Text="<%$Resources:wss,quiklnch_allcontent_15%>" Description="<%$Resources:wss,siteactions_allcontentdescription%>" ImageUrl="/_layouts/15/images/allcontent32.png?rev=44" MenuGroupId="200" Sequence="240" UseShortId="true" ClientOnClickNavigateUrl="~siteLayouts/viewlsts.aspx" PermissionsString="ViewFormPages" PermissionMode="Any"/>
                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_ChangeTheLook" Text="<%$Resources:wss,siteactions_changethelook15%>" Description="<%$Resources:wss,siteactions_changethelookdesc15%>" MenuGroupId="300" Sequence="310" UseShortId="true" ClientOnClickNavigateUrl="~siteLayouts/designgallery.aspx" PermissionsString="ApplyThemeAndBorder,ApplyStyleSheets,Open,ViewPages,OpenItems,ViewListItems" PermissionMode="All"/>
                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_Settings" Text="<%$Resources:wss,siteactions_settings15%>" Description="<%$Resources:wss,siteactions_sitesettingsdescriptionv4%>" ImageUrl="/_layouts/15/images/settingsIcon.png?rev=44" MenuGroupId="300" Sequence="320" UseShortId="true" ClientOnClickScriptContainingPrefixedUrl="GoToPage('~siteLayouts/settings.aspx')" PermissionsString="EnumeratePermissions,ManageWeb,ManageSubwebs,AddAndCustomizePages,ApplyThemeAndBorder,ManageAlerts,ManageLists,ViewUsageData" PermissionMode="Any"/>
                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_SwitchToMobileView" Visible="false" Text="<%$Resources:wss,siteactions_switchtomobileview%>" Description="<%$Resources:wss,siteactions_switchtomobileviewdesc%>" MenuGroupId="300" Sequence="330" UseShortId="true" ClientOnClickScript="STSNavigate(StURLSetVar2(ajaxNavigate.get_href(), 'mobile', '1'));"/>
                </SharePoint:FeatureMenuTemplate>
              </CustomTemplate>
            </SharePoint:SiteActions>
          </span>
        </div>
        <SharePoint:ScriptBlock runat="server">var g_navBarHelpDefaultKey = "HelpHome";</SharePoint:ScriptBlock>
        <SharePoint:DelegateControl id="ID_SuiteBarDelegate" ControlId="SuiteBarDelegate" runat="server"/>
      </SharePoint:AjaxDelta>
      <div id="ms-hcTest"></div>
      <%-- /suite bar --%>

      <%-- ribbon --%>
      <div id="s4-ribbonrow">
        <div id="globalNavBox" class="noindex">
          <div id="ribbonBox">
            <div id="s4-ribboncont">
              <SharePoint:AjaxDelta id="DeltaSPRibbon" BlockElement="true" runat="server">
                <SharePoint:DelegateControl runat="server" ID="GlobalDelegate0" ControlId="GlobalSiteLink0"/>
                <SharePoint:SPRibbon runat="server" PlaceholderElementId="RibbonContainer" CssFile="">
                  <SharePoint:SPRibbonPeripheralContent runat="server" CssClass="ms-core-defaultFont ms-dialogHidden" Location="TabRowLeft"/>
                  <SharePoint:SPRibbonPeripheralContent runat="server" Location="TabRowRight" ID="RibbonTabRowRight" CssClass="s4-trc-container s4-notdlg ms-core-defaultFont">
                    <SharePoint:SPSharePromotedActionButton runat="server"/>
                    <SharePoint:DelegateControl runat="server" ControlId="PromotedActions" AllowMultipleControls="true"/>
                    <SharePoint:SPSyncPromotedActionButton runat="server"/>
                    <SharePoint:PageStateActionButton id="PageStateActionButton" runat="server" Visible="false"/>
                    <SharePoint:DeveloperDashboard runat="server"/>
                    <SharePoint:DeveloperDashboardLauncher ID="DeveloperDashboardLauncher" ThemeKey="spcommon" TouchMode="true" TouchModeWidth="30" TouchModeHeight="30" TouchModePaddingLeft="7" TouchModePaddingTop="7" TouchModePaddingRight="7" TouchModePaddingBottom="7" NavigateUrl="javascript:return false" OnClick="ToggleDeveloperDashboard(window.g_ddHostBase);return false" OuterCssClass="ms-dd-button ms-qatbutton" runat="server" ImageUrl="/_layouts/15/images/spcommon.png?rev=44" AlternateText="<%$Resources:wss,multipages_launchdevdashalt_text%>" ToolTip="<%$Resources:wss,multipages_launchdevdashalt_text%>" OffsetX="145" OffsetY="196" HoverOffsetX="163" HoverOffsetY="196" Height="16" Width="16"/>
                  </SharePoint:SPRibbonPeripheralContent>
                </SharePoint:SPRibbon>
              </SharePoint:AjaxDelta>
            </div>
            <SharePoint:AjaxDelta id="DeltaSPNavigation" runat="server">
              <asp:ContentPlaceHolder ID="SPNavigation" runat="server">
                <SharePoint:DelegateControl runat="server" ControlId="PublishingConsole" Id="PublishingConsoleDelegate"/>
              </asp:ContentPlaceHolder>
            </SharePoint:AjaxDelta>
          </div>
          <SharePoint:AjaxDelta id="DeltaWebPartAdderUpdatePanelContainer" BlockElement="true" CssClass="ms-core-webpartadder" runat="server">
            <div id="WebPartAdderUpdatePanelContainer">
              <asp:UpdatePanel ID="WebPartAdderUpdatePanel" UpdateMode="Conditional" ChildrenAsTriggers="false" runat="server">
                <ContentTemplate>
                  <WebPartPages:WebPartAdder ID="WebPartAdder" runat="server"/>
                </ContentTemplate>
                <Triggers>
                  <asp:PostBackTrigger ControlID="WebPartAdder"/>
                </Triggers>
              </asp:UpdatePanel>
            </div>
          </SharePoint:AjaxDelta>
        </div>
      </div>
      <%-- /ribbon --%>

    </SharePoint:SPSecurityTrimmedControl>
    <%-- /hide ribbon --%>

    <%-- workspace --%>
    <div id="s4-workspace" class="ms-core-overlay">
      <div id="s4-bodyContainer">

        <%-- notifications and page status --%>
        <div id="notificationArea" class="ms-notif-box"></div>
        <div id="pageStatusBar"></div>

        <%-- header --%>
        <header class="header s4-notdlg" role="banner">

          <%-- brand --%>
          <h2 class="brand">
            <SharePoint:SPSimpleSiteLink runat="server" id="onetidProjectPropertyTitleGraphic"><SharePoint:SiteLogoImage name="onetidHeadbnnr0" id="onetidHeadbnnr2" LogoImageUrl="/_layouts/15/images/siteIcon.png?rev=23" runat="server"/></SharePoint:SPSimpleSiteLink>
          </h2>

          <%-- menu --%>
          <nav class="menu" role="navigation">
            <SharePoint:DelegateControl runat="server" ControlId="TopNavigationDataSource" Id="topNavigationDelegate">
              <Template_Controls>
                <asp:SiteMapDataSource ShowStartingNode="False" SiteMapProvider="SPNavigationProvider" id="topSiteMap" runat="server" StartingNodeUrl="sid:1002"/>
              </Template_Controls>
            </SharePoint:DelegateControl>
            <asp:ContentPlaceHolder id="PlaceHolderTopNavBar" runat="server">
              <SharePoint:AspMenu ID="TopNavigationMenu" Runat="server" EnableViewState="false" DataSourceID="topSiteMap" AccessKey="<%$Resources:wss,navigation_accesskey%>" UseSimpleRendering="true" UseSeparateCss="false" Orientation="Horizontal" StaticDisplayLevels="2" AdjustForShowStartingNode="true" MaximumDynamicDisplayLevels="2" SkipLinkText=""/>
            </asp:ContentPlaceHolder>
          </nav>

          <%-- search --%>
          <div class="search" role="search">
            <asp:ContentPlaceHolder id="PlaceHolderSearchArea" runat="server">
              <SharePoint:DelegateControl runat="server" ControlId="SmallSearchInputBox"/>
            </asp:ContentPlaceHolder>
          </div>

        </header>
        <%-- header --%>

        <%-- body --%>
        <section class="body">

          <%-- main --%>
          <main class="main" role="main">

            <%-- page title --%>
            <h1 class="page-title">
              <asp:ContentPlaceHolder id="PlaceHolderPageTitleInTitleArea" runat="server">
                <SharePoint:SPTitleBreadcrumb runat="server" RenderCurrentNodeAsLink="true" SiteMapProvider="SPContentMapProvider" CentralAdminSiteMapProvider="SPXmlAdminContentMapProvider" SkipLinkText="">
                  <PATHSEPARATORTEMPLATE>
                    <SharePoint:ClusteredDirectionalSeparatorArrow runat="server"/>
                  </PATHSEPARATORTEMPLATE>
                </SharePoint:SPTitleBreadcrumb>
              </asp:ContentPlaceHolder>
            </h1>

            <%-- main content --%>
            <div class="main-content">
              <a id="mainContent" name="mainContent" tabindex="-1"></a>
              <asp:ContentPlaceHolder id="PlaceHolderMain" runat="server"/>
            </div>

          </main>
          <%-- /main --%>

          <%-- sidebar --%>
          <aside class="sidebar s4-notdlg" role="complementary">

            <%-- side menu --%>
            <nav class="side-menu" role="navigation">
              <SharePoint:DelegateControl runat="server" ControlId="GroupActionsTop" AllowMultipleControls="true"/>
              <asp:ContentPlaceHolder id="PlaceHolderLeftNavBar" runat="server">
                <SharePoint:DelegateControl runat="server" ControlId="QuickLaunchTop"/>
                <a id="startNavigation" name="startNavigation" tabIndex="-1"></a>
                <asp:ContentPlaceHolder id="PlaceHolderLeftNavBarTop" runat="server"/>
                <asp:ContentPlaceHolder id="PlaceHolderQuickLaunchTop" runat="server"/>
                <asp:ContentPlaceHolder id="PlaceHolderLeftNavBarDataSource" runat="server"/>
                <asp:ContentPlaceHolder id="PlaceHolderCalendarNavigator" runat="server"/>
                <asp:ContentPlaceHolder id="PlaceHolderLeftActions" runat="server"/>
                <SharePoint:SPNavigationManager id="QuickLaunchNavigationManager" runat="server" QuickLaunchControlId="V4QuickLaunchMenu" ContainedControl="QuickLaunch" EnableViewState="false">
                  <SharePoint:DelegateControl runat="server" ControlId="QuickLaunchDataSource">
                    <Template_Controls>
                      <asp:SiteMapDataSource SiteMapProvider="SPNavigationProvider" ShowStartingNode="False" id="QuickLaunchSiteMap" StartingNodeUrl="sid:1025" runat="server"/>
                    </Template_Controls>
                  </SharePoint:DelegateControl>
                  <SharePoint:AspMenu id="V4QuickLaunchMenu" runat="server" EnableViewState="false" DataSourceId="QuickLaunchSiteMap" UseSimpleRendering="true" Orientation="Vertical" StaticDisplayLevels="3" AdjustForShowStartingNode="true" MaximumDynamicDisplayLevels="0" SkipLinkText=""/>
                </SharePoint:SPNavigationManager>
                <asp:ContentPlaceHolder id="PlaceHolderQuickLaunchBottom" runat="server">
                  <SharePoint:DelegateControl id="connectedGroupsNav" runat="server" ControlId="ConnectedGroupsNav" AllowMultipleControls="true"/>
                </asp:ContentPlaceHolder>
                <SharePoint:DelegateControl runat="server" ControlId="QuickLaunchBottom"/>
              </asp:ContentPlaceHolder>
            </nav>

          </aside>
          <%-- /sidebar --%>

        </section>
        <%-- /body --%>

        <%-- footer --%>
        <footer class="footer s4-notdlg" role="contentinfo">

        </footer>
        <%-- /footer --%>

        <SharePoint:AjaxDelta id="DeltaFormDigest" BlockElement="true" runat="server">
          <asp:ContentPlaceHolder id="PlaceHolderFormDigest" runat="server">
            <SharePoint:FormDigest runat="server"/>
          </asp:ContentPlaceHolder>
        </SharePoint:AjaxDelta>

        <asp:ContentPlaceHolder id="PlaceHolderSiteName" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderHorizontalNav" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderPageImage" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderTitleLeftBorder" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderMiniConsole" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderTitleRightMargin" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderTitleAreaSeparator" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderNavSpacer" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderLeftNavBarBorder" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderBodyLeftBorder" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderBodyRightMargin" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderTitleAreaClass" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderGlobalNavigation" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderGlobalNavigationSiteMap" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="WSSDesignConsole" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderTitleBreadcrumb" runat="server" Visible="false"/>
        <asp:ContentPlaceHolder id="PlaceHolderPageDescription" runat="server" Visible="false"/>

      </div>
    </div>
    <%-- /workspace --%>

  </SharePoint:SharePointForm>
  <%-- /form --%>

  <SharePoint:AjaxDelta id="DeltaPlaceHolderUtilityContent" runat="server">
    <asp:ContentPlaceHolder id="PlaceHolderUtilityContent" runat="server"/>
  </SharePoint:AjaxDelta>
  <SharePoint:ScriptBlock runat="server">var g_Workspace = "s4-workspace";</SharePoint:ScriptBlock>

  <%-- app scripts --%>
  <script src="<asp:Literal runat='server' Text='<% $SPUrl:~sitecollection/_catalogs/masterpage/{{ project }}/js/app.js %>'/>"></script>

</body>
</SharePoint:SPHtmlTag>`;
