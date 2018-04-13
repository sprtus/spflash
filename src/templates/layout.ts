export default `<%@ Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version={{ version }}.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version={{ version }}.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version={{ version }}.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version={{ version }}.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register tagprefix="Taxonomy" namespace="Microsoft.SharePoint.Taxonomy" assembly="Microsoft.SharePoint.Taxonomy, Version={{ version }}.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
  <SharePoint:FieldValue FieldName="Title" runat="server"/>
</asp:Content>

<asp:Content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
  <SharePoint:FieldValue FieldName="Title" runat="server"/>
</asp:Content>

<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">

{{#if hasPageContent}}
  <div class="page-content">
    <PublishingWebControls:RichHtmlField FieldName="PublishingPageContent" HasInitialFocus="false" MinimumEditHeight="200px" runat="server"/>
  </div>

{{/if}}
{{#if hasWebPartZones}}
  <div class="web-parts">
    <WebPartPages:WebPartZone id="Zone1" runat="server" title="Zone 1"/>
    <WebPartPages:WebPartZone id="Zone2" runat="server" title="Zone 2"/>
  </div>

{{/if}}
{{#if hasEditModePanel}}
  <PublishingWebControls:EditModePanel CssClass="page-settings" runat="server">
    <SharePoint:TextField FieldName="Title" runat="server"/>
    <SharePoint:TextField FieldName="Name" runat="server"/>
  </PublishingWebControls:EditModePanel>

{{/if}}
</asp:Content>`;
